import Network from './typing/NetworkTyping';

export declare function Post(url: string, networkName?: string): (prototype, Name) => void;
export declare function Get(url: string, networkName?: string): (prototype, Name) => void;
export declare function Put(url: string, networkName?: string): (prototype, Name) => void;
export declare function Delete(url: string, networkName?: string): (prototype, Name) => void;
export declare function Head(url: string, networkName?: string): (prototype, Name) => void;
export declare function Service(constructor: Function): void;

declare class Network {
  constructor();
  onNetworkRequestBefore(option: Network.IOption, next);
  onNetworkResponseAfter(option: Network.IOption, req, next);
  onNetworkError(option: Network.IOption, e: Error, next);
}

export default Network;