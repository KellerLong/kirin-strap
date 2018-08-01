export default (options) => {
  return (object: any, key: string) => {
    object.state = { ...object.state || {}, [key]: options.default || null };
    if (options.set) {
      // 新增设置该属性的 reducers
      const setFun: any  = (state: any, action: any) => {
        state[key] = action.payload;
        return { ...state };
      };
      const name: string = key.replace(/\b(\w)/g, (val: string) => val.toUpperCase());
      object.reducers = { ...object.reducers || {}, [`set${name}`]: setFun };
    }
  };
};
