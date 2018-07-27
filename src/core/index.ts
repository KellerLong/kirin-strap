import dva, {DvaInstance, Hooks, Model, Router} from 'dva';
import {IXssrOption} from '../typings/IXssr';



export default class Xssr {

  public dvaApp: DvaInstance;

  public xssOption: IXssrOption;

  public constructor(xssOption: IXssrOption) {
    xssOption.root      = xssOption.root || '#root';
    this.xssOption      = xssOption;

    this.dvaApp = dva(xssOption.dvaOption);

  }

  public model(model: Model) {
    this.dvaApp.model(model);
  }

  public router (router: Router) {
    this.dvaApp.router(router);
    // TODO 客户端渲染 初始化到根节点
    this.dvaApp.start(this.xssOption.root);
  }

  // 安装 dva 插件
  public use(hooks: Hooks) {
    return this.dvaApp.use(hooks);
  }
}
