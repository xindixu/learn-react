import React from "react";
import PropTypes from "prop-types";
import { FieldContext } from "./FieldContext";
import useForm from "./useForm";

const Form = ({ form, onFinish, onFinishFailed, ref, children }) => {
  // pass back `form` into `useForm`
  const [formInstance] = useForm(form);
  formInstance.setCallbacks({ onFinish, onFinishFailed });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
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
