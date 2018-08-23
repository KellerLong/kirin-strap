declare namespace Network {
    export interface IOption {
        origin: string;
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

export default Network;

