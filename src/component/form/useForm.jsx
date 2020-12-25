import { useRef } from "react";
import FormStore from "./FormStore";

const useForm = (form) => {
  const formStore = useRef();

  // If there is an old form passed in from props, set that as store;
  // Otherwise, create a new one
  if (form) {
    formStore.current = form;
  } else {
    formStore.current = new FormStore().getForm();
  }
  return [formStore.current];
};

export default useForm;
