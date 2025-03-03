import { createAction, createReducer } from "@reduxjs/toolkit"

const defaultState = {
    Posts:[],

}

export const ChangePosts = createAction("CHANGE_POSTS")

export const postReducer = createReducer(defaultState,(builder) => {
    builder
    .addCase(ChangePosts,(state,action) => {
        state.Posts = action.payload
    })
})