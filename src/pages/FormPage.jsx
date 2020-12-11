import React from "react";
import { Form, Button, Input } from "antd";

const required = { required: true, message: "is required" };

const FormPage = (props) => {
  const [form] = Form.useForm();
  const onFinish = () => {
    console.log("success", form);
  };
  const onFinishFailed = () => {
    console.log("failed");
  };
  return (
    <div>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item name="userName" label="User Name" rules={[required]}>
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[required]}>
          <Input placeholder="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormPage;
