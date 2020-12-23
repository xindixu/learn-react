import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FieldContext } from "./FieldContext";

const Field = ({ name, rules, children, value, onChange }) => {
  // Form need to have access to this value
  // const [value, setValue] = useState();

  const { setFieldsValue, getFieldValue, registerField } = useContext(
    FieldContext
  );

  const [, forceUpdate] = useState();

  useEffect(() => {
    registerField(forceUpdate);
  }, [name]);

  const controlled = () => ({
    value: getFieldValue(name),
    onChange: (e) => {
      setFieldsValue({ [name]: e.target.value });
    },
  });
  return React.cloneElement(children, controlled());
};

Field.propTypes = {};

export default Field;
