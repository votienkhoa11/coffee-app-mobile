import { createSlice } from "@reduxjs/toolkit"

const initLoaderState = {
  isLoading: false,
  loadCount: 0
}

const loader = createSlice({
    name: 'loader',
    initialState: initLoaderState,
    reducers: {
        startLoading: state => {
            state.isLoading = true
            state.loadCount += 1
        },
        finishLoading: state => {
            const newCount = state.loadCount - 1
            state.isLoading = newCount !== 0
            state.loadCount = newCount
        }
    },
})

const { actions, reducer } = loader
export const { startLoading, finishLoading } = actions
export default reducer