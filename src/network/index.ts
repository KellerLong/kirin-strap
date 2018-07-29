import define from './Define';
import service from './Service';
import Network from './Network';

export default Network;
export const Define = define;
export const Service = service;

export const Get = Network.get;
export const Post = Network.post;
export const Put = Network.put;
export const Delete = Network.delete;
export const Head = Network.head;
