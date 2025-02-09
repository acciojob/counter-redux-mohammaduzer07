import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../slice/slice"

const store = configureStore({
    reducer : {
        counter: counterReducer,
    },
})
export default store