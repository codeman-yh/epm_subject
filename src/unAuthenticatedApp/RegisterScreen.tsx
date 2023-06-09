import { Button, Form, Input } from "antd";
import { useAuthContext } from "context/AuthContext";
import { LongButton } from "unAuthenticatedApp";
export const RegisterScreen = () => {
  const { register } = useAuthContext();
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
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
        注册
      </LongButton>
    </Form>
  );
};
