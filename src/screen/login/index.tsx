import { useAuthContext } from "context/AuthContext";
import { FormEvent } from "react";
export const LoginScrenn = () => {
  const { login, user } = useAuthContext();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };

  return (
    <div>
      {user ? <div>{user.name}</div> : null}
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
