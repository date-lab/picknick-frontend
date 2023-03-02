import CafeDTO from "domain/dto/CafeDTO";
import { ICafePositionDTO } from "domain/dto/cafePositionDTO";



export interface ICafeRepository {
    getCafesPosition(): Promise<Array<ICafePositionDTO>>;
    getCafes(mapLocation?: string): Promise<Array<CafeDTO>>;
}