import { finishLoading, startLoading } from "./loaderSlice"
import { Dispatch } from "redux"

type ServiceRequestParams = {
    option?: { skipLoader?: boolean }
    dispatch: Dispatch<any>
    serviceMethod: (payload?: any) => Promise<any> | any
    payload?: any
}

const serviceRequest = async ({
    option = {},
    dispatch,
    serviceMethod,
    payload = {},
}: ServiceRequestParams) => {
    try {
        if(!option.skipLoader) {
            dispatch(startLoading())
        }

        const serviceRequestResponse = await serviceMethod(payload)
        return serviceRequestResponse
    } catch (error) {
    } finally {
        if (!option.skipLoader) {
            dispatch(finishLoading())
        }
    }
}

export default serviceRequest