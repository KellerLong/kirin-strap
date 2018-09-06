import { History, Path, Location, LocationState, LocationDescriptorObject } from 'history'

export const CALL_HISTORY_METHOD: string;

export interface LocationActionPayload {
    method: string;
    args?: any[];
}

export interface RouterAction {
    type: typeof CALL_HISTORY_METHOD;
    payload: LocationActionPayload;
}

export function push(path: Path, state?: LocationState): RouterAction;
export function push(location: LocationDescriptorObject): RouterAction;
export function replace(path: Path, state?: LocationState): RouterAction;
export function replace(location: LocationDescriptorObject): RouterAction;
export function go(n: number): RouterAction
export function goBack(): RouterAction
export function goForward(): RouterAction

export declare const routerRedux: {
    push: typeof push,
    replace: typeof replace,
    go: typeof go,
    goBack: typeof goBack,
    goForward: typeof goForward,
};

export declare function Route(path: string, name?: string, parent?: string): (constructor: Function) => void;
export default Route;
