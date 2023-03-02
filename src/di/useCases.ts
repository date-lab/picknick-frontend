import Cafe from 'domain/useCases/Cafe'
import { IRepositories } from './repositories'

export interface IUseCases {
  cafe: Cafe
}

export default (repositories: IRepositories): IUseCases => {
  return {
    cafe: new Cafe(repositories.cafe)
  }
}