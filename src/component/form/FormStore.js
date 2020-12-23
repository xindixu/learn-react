class FormStore {
  constructor() {
    this.store = {};
    this.fieldEntities = [];
  }

  registerField = (entity) => {
    this.fieldEntities.push(entity);

    // cancel register
    return () => {
      this.fieldEntities.filter((f) => f.name !== entity.name);
      delete this.store[entity.name];
    };
  };

  setFieldsValue = (newStore) => {
    // update this.store
    this.store = {
      ...this.store,
      ...newStore,
    };

    // trigger component update
    this.fieldEntities.forEach((entity) => {
      Object.keys(newStore).forEach((key) => {
        if (key === entity.name) {
          entity.updater();
        }
      });
    });
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
