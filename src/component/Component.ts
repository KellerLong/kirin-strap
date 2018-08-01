// 组件装饰器
import { connect } from 'dva';

export default (Component) => {
  console.log(Component);
  const res = connect((model) => model)(Component);
  console.log(res);
  return Component;
};