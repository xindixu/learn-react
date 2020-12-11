import React, { Component, useEffect } from "react";
// import Form, { Field } from "rc-field-form";
import Form, { Field } from "../component/form";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default function MyRCFieldForm(props) {
  const [form] = Form.useForm();

  const onFinish = (val) => {
    console.log("onFinish", val); // sy-log
  };

  // 表单校验失败执行
  const onFinishFailed = (val) => {
    console.log("onFinishFailed", val); // sy-log
  };

  useEffect(() => {
    console.log("form", form); // sy-log
    // form.setFieldsValue({ username: "default" });
  }, []);

  return (
    <div>
      <h3>MyRCFieldForm</h3>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Field name="username" rules={[nameRules]}>
          <input placeholder="input UR Username" />
        </Field>
        <Field name="password" rules={[passworRules]}>
          <input placeholder="input UR Password" type="password" />
        </Field>
        <button>Submit</button>
      </Form>
    </div>
  );
}
