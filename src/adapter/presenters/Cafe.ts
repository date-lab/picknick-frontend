import CafeUseCase from "domain/useCases/Cafe";
import {ICafeEntity} from "domain/entities/Cafe";

class CafePresenter {
    constructor(
        private readonly useCases: CafeUseCase
    ) {}

    async getCafeAll(): Promise<Array<ICafeEntity>> {
        return await this.useCases.getCafesAll();
    }

    async getCafesByMapLocation(mapLocation: string): Promise<Array<ICafeEntity>> {
        return await this.useCases.getCafesByMapLocation(mapLocation);
    }

    async getCafesPosition(): Promise<Array<ICafeEntity>> {
        return await this.useCases.getCafePosition();
    }
}

export default CafePresenter;