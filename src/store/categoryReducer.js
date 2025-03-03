import { createAction, createReducer } from "@reduxjs/toolkit"

const defaultState = {
    Categories:[],

}

export const ChangeCategories = createAction("CHANGE_CATEGORIES")

export const categoryReducer = createReducer(defaultState,(builder) => {
    builder
    .addCase(ChangeCategories,(state,action) => {
        state.Categories = action.payload
    })
})