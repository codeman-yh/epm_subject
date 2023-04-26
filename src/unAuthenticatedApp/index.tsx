import { useState } from "react";
import { LoginScreen } from "./LoginScreen";
import { RegisterScreen } from "./RegisterScreen";

export const UnAuthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "去登录" : "去注册"}
      </button>
    </div>
  );
};
