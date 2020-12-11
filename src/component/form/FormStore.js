class FormStore {
  constructor() {
    this.store = {};
  }

  setFieldsValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
  };

  getFieldsValue = () => ({ ...this.store });

  getFieldValue = (name) => this.store[name];

  getForm = () => {
    return {
      setFieldsValue: this.setFieldsValue,
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
    };
  };
}

export default FormStore;
