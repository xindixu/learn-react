import React, { useEffect } from "react";
// import Form, { Field } from "rc-field-form";
import Form, { Field } from "../component/form";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default function MyRCFieldForm(props) {
  const [form] = Form.useForm();

  const onFinish = (val) => {
    console.log("onFinish", val);
  };

  const onFinishFailed = (val) => {
    console.log("onFinishFailed", val);
  };

  useEffect(() => {
    console.log("form", form);
    // set form default value onto the current form
    form.setFieldsValue({ username: "default" });
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
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
