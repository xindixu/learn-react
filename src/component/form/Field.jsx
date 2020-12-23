import React, { useContext, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { FieldContext } from "./FieldContext";

const Field = ({ name, rules, children, value, onChange }) => {
  // Form need to have access to this value
  // const [value, setValue] = useState();

  const { setFieldsValue, getFieldValue, registerField } = useContext(
    FieldContext
  );

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    const unregister = registerField({ updater: forceUpdate, name });
    return () => {
      unregister();
    };
  }, []);

  const controlled = useCallback(
    () => ({
      value: getFieldValue(name),
      onChange: (e) => {
        setFieldsValue({ [name]: e.target.value });
      },
    }),
    [getFieldValue, name, setFieldsValue]
  );

  return (
    <>
      <div>{React.cloneElement(children, controlled())}</div>
      <p>value: {getFieldValue(name)}</p>
    </>
  );
};

Field.propTypes = {};

export default Field;
