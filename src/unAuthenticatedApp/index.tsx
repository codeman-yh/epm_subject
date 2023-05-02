import { Button, Card, Divider } from "antd";
import { useState } from "react";
import { LoginScreen } from "./LoginScreen";
import { RegisterScreen } from "./RegisterScreen";
import styled from "@emotion/styled";
import Logo from "assets/logo.svg";
import Left from "assets/left.svg";
import Right from "assets/right.svg";

export const UnAuthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Contaner>
      <Background />
      <Header />
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <Divider />
        <a onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "已注册账号，去登录" : "没有账号？去注册"}
        </a>
      </ShadowCard>
    </Contaner>
  );
};

export const LongButton = styled(Button)`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${Left}), url(${Right});
`;

const Header = styled.header`
  background: url(${Logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 45rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
const Contaner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justifycontent: "center";
  min-height: 100vh;
`;
