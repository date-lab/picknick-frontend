export interface ICafeEntity {
    ca_id?: string | undefined,
    ca_name: string,
    ca_tel?: string | undefined,
    ca_addr?: string | undefined,
    ca_explain?: string | undefined,
    ca_explain2?: string | undefined,
    ca_tag?: Array<string> | undefined,
    ca_insta?: string | undefined,
    ca_open_time?: string | undefined,
    ca_close_time?: string | undefined,
    ca_img1?: string | undefined,
    ca_img2?: string | undefined,
    ca_img3?: string | undefined,
    ca_hit?: number | undefined | null,
    ca_bookmark?: string | undefined | null,
    ca_long?: string | undefined,
    ca_lat?: string | undefined
}

export interface ICafeData {
    ca_id?: string | undefined,
    ca_name: string,
    ca_tel?: string | undefined,
    ca_addr?: string | undefined,
    ca_explain?: string | undefined,
    ca_explain2?: string | undefined,
    ca_tag?: Array<string> | undefined,
    ca_insta?: string | undefined,
    ca_open_time?: string | undefined,
    ca_close_time?: string | undefined,
    ca_img1?: string | undefined,
    ca_img2?: string | undefined,
    ca_img3?: string | undefined,
    ca_hit?: number | undefined | null,
    ca_bookmark?: string | undefined | null,
    ca_long?: string | undefined,
    ca_lat?: string | undefined
}

class Cafe implements ICafeEntity {
    private readonly $ca_id?: string | undefined;
    
    private readonly $ca_tel?: string | undefined;
    private readonly $ca_addr?: string | undefined;
    private readonly $ca_explain?: string | undefined;
    private readonly $ca_explain2?: string | undefined;
    private readonly $ca_tag?: Array<string>;
    private readonly $ca_insta?: string | undefined;
    private readonly $ca_open_time?: string | undefined;
    private readonly $ca_close_time?: string | undefined;
    private readonly $ca_img1?: string | undefined;
    private readonly $ca_img2?: string | undefined;
    private readonly $ca_img3?: string | undefined;
    private readonly $ca_hit?: number | undefined;
    private readonly $ca_bookmark?: string | undefined;

    private readonly $ca_name: string;
    private readonly $ca_lat?: string | undefined;
    private readonly $ca_long?: string | undefined;

    constructor(cafeData: ICafeData){
        this.$ca_name = cafeData.ca_name;

        if(cafeData?.ca_id) this.$ca_id = cafeData.ca_id;
        if(cafeData?.ca_explain) this.$ca_explain = cafeData.ca_explain;
        if(cafeData?.ca_tag) this.$ca_tag = cafeData.ca_tag;
        if(cafeData?.ca_img1) this.$ca_img1 = cafeData.ca_img1;
        if(cafeData?.ca_img2) this.$ca_img2 = cafeData.ca_img2;
        if(cafeData?.ca_img3) this.$ca_img3 = cafeData.ca_img3;
        if(cafeData?.ca_hit) this.$ca_hit = cafeData.ca_hit;

        if(cafeData?.ca_bookmark) this.$ca_bookmark = cafeData.ca_bookmark;
        if(cafeData?.ca_addr) this.$ca_addr = cafeData.ca_addr;
        if(cafeData?.ca_tel) this.$ca_tel = cafeData.ca_tel;
        if(cafeData?.ca_explain2) this.$ca_explain2 = cafeData.ca_explain2;
        if(cafeData?.ca_insta) this.$ca_insta = cafeData.ca_insta;
        if(cafeData?.ca_open_time) this.$ca_open_time = cafeData.ca_open_time;
        if(cafeData?.ca_close_time) this.$ca_close_time = cafeData.ca_close_time;
        
        if(cafeData?.ca_lat) this.$ca_lat = cafeData.ca_lat;
        if(cafeData?.ca_long) this.$ca_long = cafeData.ca_long;
    }

    public get ca_id(): string | undefined {
        return this.$ca_id;
    }

    
    public get ca_name(): string {
        return this.$ca_name;
    }
    
    
    public get ca_tel() : string | undefined {
        return this.$ca_tel;
    }

    
    public get ca_addr() : string | undefined {
        return this.$ca_addr;
    }

    
    public get ca_explain() : string | undefined {
        return this.$ca_explain;
    }

    
    public get ca_explain2() : string | undefined {
        return this.$ca_explain2;
    }

    
    public get ca_tag() : Array<string> | undefined {
        return this.$ca_tag;
    }

    
    public get ca_insta() : string | undefined {
        return this.$ca_insta;
    }

    
    public get ca_open_time() : string | undefined {
        return this.$ca_open_time;
    }
    
    
    public get ca_close_time() : string | undefined {
        return this.$ca_close_time;
    }
    
    
    public get ca_img1() : string | undefined {
        return this.$ca_img1
    }
    
    
    public get ca_img2() : string | undefined {
        return this.$ca_img2
    }
    
    public get ca_img3() : string | undefined {
        return this.$ca_img3
    }
    
    
    public get ca_hit() : number | undefined {
        return this.$ca_hit;
    }
    
    
    public get ca_bookmark() : string | undefined {
        return this.$ca_bookmark;
    }   

    
    public get ca_lat() : string | undefined {
        return this.$ca_lat
    }
    
    public get ca_long() : string | undefined {
        return this.$ca_long
    }
}

export default Cafe;