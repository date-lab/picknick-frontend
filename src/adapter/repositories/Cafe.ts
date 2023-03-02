import {IHttp} from "adapter/infrastructures/http";
import CafeDTO, {ICafeDTO, ICafeParams} from "domain/dto/CafeDTO";
import CafePositionDTO, { ICafePositionDTO, ICafePositionParams } from "domain/dto/cafePositionDTO";
import { ICafeRepository } from "domain/useCases/repository-interfaces/iCafe";

class CafeRepository implements ICafeRepository{
    constructor(private readonly baseURL: string, readonly http: IHttp) {}


    async getCafes(mapLocation?: string): Promise<Array<ICafeDTO>> {
        const response = await this.http.request({
            method: 'get',
            url: `${this.baseURL}/map/get_cafe_list.php?${mapLocation ? `map_location=${mapLocation}` : ""}`,
        })
        return response.data.map((cafe: ICafeParams) => new CafeDTO(cafe));
    }

    async getCafesPosition(): Promise<Array<ICafePositionDTO>> {
        const response = await this.http.request({
            method: "get",
            url: `${this.baseURL}/map/get_cafe_longlat.php`,
        });

        return response.data.map((cafe: ICafePositionParams) => 
            new CafePositionDTO(cafe)
        );
    }
}

export default CafeRepository;