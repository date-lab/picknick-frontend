import CafeRepository from 'adapter/repositories/Cafe'
import { IInfrastructures } from './infrastructures'

export interface IRepositories {
  cafe: CafeRepository
}

export default (infrastructure: IInfrastructures): IRepositories => {
  const baseURL = 'https://sj100700.cafe24.com/picknic';
  return {
    cafe: new CafeRepository(baseURL, infrastructure.http)
  }
}