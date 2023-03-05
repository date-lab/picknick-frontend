export interface ICafeParams {
    ca_id: string;
    ca_name: string;
    ca_explain: string;
    ca_img1: string;
    ca_img2: string;
    ca_img3: string;
    ca_hit: number;
    ca_bookmark: string;
    ca_tag: Array<string>;
}

export interface ICafeDTO {
    readonly ca_id: string;
    readonly ca_name: string;
    readonly ca_explain: string;
    readonly ca_img1: string;
    readonly ca_img2: string;
    readonly ca_img3: string;
    readonly ca_hit: number;
    readonly ca_bookmark: string;
    readonly ca_tag: Array<string>;
}

class CafeDTO implements ICafeDTO {
    readonly ca_id: string;
    readonly ca_name: string;
    readonly ca_explain: string;
    readonly ca_img1: string;
    readonly ca_img2: string;
    readonly ca_img3: string;
    readonly ca_hit: number;
    readonly ca_bookmark: string;
    readonly ca_tag: Array<string>;

    constructor(params: ICafeParams) {
        this.ca_id = params.ca_id;
        this.ca_name = params.ca_name;
        this.ca_explain = params.ca_explain;
        this.ca_img1 = params.ca_img1;
        this.ca_img2 = params.ca_img2;
        this.ca_img3 = params.ca_img3;
        this.ca_hit = params.ca_hit;
        this.ca_bookmark = params.ca_bookmark;
        this.ca_tag = params.ca_tag;
    }
}

export default CafeDTO;