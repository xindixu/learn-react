import React, { Component } from "react";
import { Form, Button, Input } from "antd";

const FormItem = Form.Item;

const required = { required: true, message: "is required" };

class FormClassPage extends Component {
  formRef = React.createRef();

  componentDidMount() {
    this.formRef.current.setFieldsValue({ username: "defalut" });
  }

  onFinish = (val) => {
    console.log("onFinish", val); // sy-log
  };

  onFinishFailed = (val) => {
    console.log("onFinishFailed", val); // sy-log
  };

  render() {
    return (
      <div>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <FormItem name="username" label="User name" rules={[required]}>
            <Input placeholder="username" />
          </FormItem>
          <FormItem name="password" label="Password" rules={[required]}>
            <Input placeholder="password" />
          </FormItem>
          <FormItem>
            <Button type="primary" size="large" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default FormClassPage;
