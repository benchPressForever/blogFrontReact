import { createAction, createReducer } from "@reduxjs/toolkit"

const defaultState = {
    User:{},
    IsAuth:false,

}

export const ChangeUser = createAction("CHANGE_USER")
export const ChangeIsAuth = createAction("CHANGE_IS_AUTH")

export const userReducer = createReducer(defaultState,(builder) => {
    builder
    .addCase(ChangeUser,(state,action) => {
        state.User = action.payload
    })
    .addCase(ChangeIsAuth,(state) => {
        state.IsAuth = !state.IsAuth
    })
})