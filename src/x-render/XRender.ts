// 编译入口
export default class XRender {
// 初始化
  public constructor() {
    // 初始化配置

    // 初始路由

    // 初始化 dva
  }

  // 路由跳转前 返回 true 继续跳转
  public onRouteBefore(): boolean {
    return true;
  }

  // 路由跳转后
  public onRouteAfter(): void {
  }

  // 网络请求前
  public onNetWorkRequestBefore( url, sendData, network): boolean {
    return true;
  }

  // 网络请求后
  public onNetWorkRequestAfter( url, sendData, network): boolean {
    return true;
  }

  // 网络请求中发生变更
  public onNetWorkRequestChange( url, sendData, network): boolean {
    return true;
  }

  // 网络请求中发生错误
  public onNetWorkRequestError( url, sendData, network): boolean {
    return true;
  }

  // 全局 layout 路由之外 返回一个有 children 的 组件
  public returnLayout() {

  }
}