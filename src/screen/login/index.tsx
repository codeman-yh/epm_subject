import { FormEvent, InputHTMLAttributes } from "react";

const baseApi = process.env.REACT_APP_BASE_URL;
export const LoginScrenn = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };

  const login = (param: { username: string; password: string }) => {
    fetch(`${baseApi}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (res) => {
      if (res.status == 200) {
        console.log("登录成功");
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            用户名：
            <input type="text" id="username" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            密码：
            <input type="password" id="password" />
          </label>
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  );
};
