import { finishLoading, startLoading } from "./loaderSlice"

const serviceRequest = async ({
    option = {},
    dispatch,
    serviceMethod,
    payload = {},
}) => {
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