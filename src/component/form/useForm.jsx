import { useRef } from "react";
import FormStore from "./FormStore";

const useForm = () => {
  const formStore = useRef(new FormStore().getForm());

  return [formStore.current];
};

export default useForm;
