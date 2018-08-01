export default (Model) => (Component, Name) => {
  Component[Name] = Component.props[Name];
  return Model;
};