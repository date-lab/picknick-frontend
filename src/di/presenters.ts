import CafePresenter from 'adapter/presenters/Cafe'
import { IUseCases } from './useCases'

export interface IPresenters {
  cafe: CafePresenter
}

export default (useCases: IUseCases): IPresenters => {
  return {
    cafe: new CafePresenter(useCases.cafe)
  }
}