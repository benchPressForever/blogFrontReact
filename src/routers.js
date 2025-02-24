import { Component } from "react"
import { NotFound } from "./components/NotFound/NotFound"
import {POST_ROUTE, POSTS_ROUTE } from "./utils/constants"
import { PostsPage } from "./pages/PostsPage/Posts"
import { Post } from "./components/Post/Post"

export const publicRouters = [
    {
        path:POST_ROUTE + '/:id',
        Component:Post
    },
    {
        path:POSTS_ROUTE,
        Component:PostsPage
    },
    {
        path:'*',
        Component:NotFound
    }

]
