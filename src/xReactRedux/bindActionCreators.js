const bindActionCreator = (creator, dispatch) => (...args) =>
  dispatch(creator(...args));

export const bindActionCreators = (creators, dispatch) => {
  const obj = {};

  Object.keys(creators).forEach((key) => {
    obj[key] = bindActionCreator(creators[key], dispatch);
  });
  return obj;
};
