import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/AuthSlice";
import courseSliceReducer from "./Slices/CourseSlice"
import LectureSliceReducers from "./Slices/LectureSlice";
import RazorpaySliceReducer from "./Slices/RazorpaySlice";

const store = configureStore({
    reducer : {
        auth : authSliceReducer,
        course : courseSliceReducer,
        razorpay : RazorpaySliceReducer,
        lecture : LectureSliceReducers

    },
    devTools : true
})

export default store;