class FormStore {
  constructor() {
    this.store = {};
    this.fieldEntities = [];
    this.callbacks = {};
  }

  setCallbacks = (newCallbacks) => {
    this.callbacks = {
      ...this.callbacks,
      ...newCallbacks,
    };
  };

  registerField = (entity) => {
    this.fieldEntities.push(entity);

    // cancel register
    return () => {
      this.fieldEntities.filter((f) => f.name !== entity.name);
      delete this.store[entity.name];
    };
  };

  setFieldsValue = (newStore) => {
    console.log(this.store, newStore);
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

    console.log(this.store);
  };

  getFieldsValue = () => ({ ...this.store });

  getFieldValue = (name) => this.store[name];

  validate = () => {
    const errs = [];
    return errs;
  };

  submit = () => {
    // validation
    const errs = this.validate();
    const { onFinish, onFinishFailed } = this.callbacks;
    if (errs.length === 0) {
      return onFinish(this.getFieldsValue());
    }

    return onFinishFailed(errs, this.getFieldsValue());
  };

  getForm = () => {
    return {
      setFieldsValue: this.setFieldsValue,
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      registerField: this.registerField,
      submit: this.submit,
      setCallbacks: this.setCallbacks,
    };
  };
}

export default FormStore;
