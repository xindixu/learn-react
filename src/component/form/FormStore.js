class FormStore {
  constructor() {
    this.store = {};
    this.fieldEntities = [];
  }

  registerField = (field) => {
    this.fieldEntities.push(field);
  };

  setFieldsValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };

    // trigger component update
    this.fieldEntities.forEach((fn) => fn());
  };

  getFieldsValue = () => ({ ...this.store });

  getFieldValue = (name) => this.store[name];

  getForm = () => {
    return {
      setFieldsValue: this.setFieldsValue,
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      registerField: this.registerField,
    };
  };
}

export default FormStore;
