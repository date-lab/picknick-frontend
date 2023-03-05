import Http from "adapter/infrastructures/http"

export interface IInfrastructures {
  http: Http
}

export default (): IInfrastructures => {
  return {
    http: new Http(),
  }
}