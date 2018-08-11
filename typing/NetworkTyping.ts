namespace NetWork {
  export interface IOption {
    baseURL: string;
    url: string;
    timeout: number;
    type: string;
    sendData?: Object;
    header: Object;
  }

  export interface INetwork {
    [key: string]: IOption
  }
}

export default NetWork;
