import NetworkTyping from './typing/NetworkTyping';


export declare function Post(url: string, networkName?: string): (prototype, Name) => void;
export declare function Get(url: string, networkName?: string): (prototype, Name) => void;
export declare function Put(url: string, networkName?: string): (prototype, Name) => void;
export declare function Delete(url: string, networkName?: string): (prototype, Name) => void;
export declare function Head(url: string, networkName?: string): (prototype, Name) => void;
export declare function Service(constructor: Function): Function;

export default class Network {
  constructor();
  onNetworkRequestBefore(option: NetworkTyping.IOption, next);
  onNetworkResponseAfter(option: NetworkTyping.IOption, req, next);
  onNetworkError(option: NetworkTyping.IOption, e: Error, next);
}
