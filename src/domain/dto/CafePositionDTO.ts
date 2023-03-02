export interface ICafePositionParams {
    ca_name: string;
    ca_lat: string;
    ca_long: string;
}
  
export interface ICafePositionDTO {
    readonly ca_name: string
    readonly ca_lat: string;
    readonly ca_long: string;
}

class CafePositionDTO implements ICafePositionDTO {
    readonly ca_name: string
    readonly ca_lat: string;
    readonly ca_long: string;

    constructor(params: ICafePositionParams) {
        this.ca_name = params.ca_name
        this.ca_lat = params.ca_lat
        this.ca_long = params.ca_long
    }
}

export default CafePositionDTO