import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";


export interface IRequestOption {
    readonly method: "get" | "post";
    readonly url: string;
    readonly headers?: AxiosHeaders;
    readonly body?: any;
}

export interface IHttp {
    request(requestOption: IRequestOption): Promise<any>;
}

class Http implements IHttp {
    async request(requestOption: IRequestOption): Promise<any> {
        const option: AxiosRequestConfig = {};

        if (requestOption?.headers)
            option.headers = new AxiosHeaders(requestOption.headers);
        if (requestOption?.body)
            Object.assign(option, requestOption.body);

        try {
            const res = await axios[requestOption.method](requestOption.url, option);
            const { data } = res;
            return data;
        } catch (e) {
            return console.log(e);
        }
    }
}

export default Http;
