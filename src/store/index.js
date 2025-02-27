import { configureStore } from "@reduxjs/toolkit";
import { postReducer} from "./postsReducer";
import { userReducer } from "./userReducer";
import { categoryReducer } from "./categoryReducer";


export const store = configureStore({
    reducer:{
        Post:postReducer,
        User:userReducer,
        Category:categoryReducer
    }
})