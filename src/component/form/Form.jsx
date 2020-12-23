import React from "react";
import PropTypes from "prop-types";
import { FieldContext } from "./FieldContext";
import useForm from "./useForm";

const Form = ({ form, onFinish, onFinishFailed, ref, children }) => {
  const [formInstance] = useForm();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formInstance.getFieldsValue());
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};

Form.propTypes = {};

export default Form;
