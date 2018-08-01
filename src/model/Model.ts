export default (obj: any) => {
  const object = new obj();
  return {
    ...object, // 防止TS报错  其实原型连浅拷贝原因 这个加上去什么都没有
    namespace: obj.name,
    state: object.state || {},
    reducers: object.reducers || {},
    effects: object.effects || {},
    subscriptions: object.subscription || {},
  };
};
