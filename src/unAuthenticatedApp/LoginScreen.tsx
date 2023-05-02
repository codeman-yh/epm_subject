import { Button, Form, Input } from "antd";
import { useAuthContext } from "context/AuthContext";
import { LongButton } from "unAuthenticatedApp";
export const LoginScreen = () => {
  const { login } = useAuthContext();
  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input type="text" placeholder="用户名" id="username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input type="password" placeholder="密码" id="password" />
      </Form.Item>
      <LongButton htmlType="submit" type="primary">
        登录
      </LongButton>
    </Form>
  );
};
