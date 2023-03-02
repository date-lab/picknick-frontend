import { ICafeDTO } from "domain/dto/CafeDTO";
import { ICafePositionDTO } from "domain/dto/cafePositionDTO";
import Cafe, {ICafeEntity} from "domain/entities/Cafe";
import {ICafeRepository} from "./repository-interfaces/iCafe";

class CafeUseCase {
    constructor(private readonly cafeRepo: ICafeRepository) {}

    async getCafesByMapLocation(mapLocation: string): Promise<Array<ICafeEntity>> {
        const cafeDTOList = await this.cafeRepo.getCafes(mapLocation);
        return cafeDTOList.map((cafeDTO: ICafeDTO)  => {
            return new Cafe(cafeDTO)
        })
    }

    async getCafesAll(): Promise<Array<ICafeEntity>> {

        const cafeDTOList = await this.cafeRepo.getCafes();
        return cafeDTOList.map((cafeDTO: ICafeDTO)  => {
            return new Cafe(cafeDTO);
        });
    }

    async getCafePosition(): Promise<Array<ICafeEntity>> {
        const cafePositionDTOList = await this.cafeRepo.getCafesPosition();
        return cafePositionDTOList.map((cafePositionDTO: ICafePositionDTO)  => {
            return new Cafe(cafePositionDTO);
        });
    }

}

export default CafeUseCase;