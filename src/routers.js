import { Component } from "react"
import { NotFound } from "./components/NotFound/NotFound"
import {CATEGORIES_ROUTE, CREATE_POST_ROUTE, EDIT_POST_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, MY_POSTS_ROUTE, POSTS_ROUTE, REGIST_ROUTE } from "./utils/constants"
import { PostsPage } from "./pages/PostsPage/Posts"
import { Post } from "./components/Post/Post"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import { MyPostsPage } from "./pages/MyPostsPage/MyPosts"
import { EditPost } from "./pages/EditPost/EditPost"
import { CreatePost } from "./pages/CreatePost/CreatePost"
import { MainPage } from "./pages/MainPage"

export const publicRouters = [
    {
        path:POSTS_ROUTE + '/:id',
        Component:Post
    },
    {
        path:POSTS_ROUTE,
        Component:PostsPage
    },
    {
        path:'*',
        Component:NotFound
    },
    {
        path:REGIST_ROUTE,
        Component:Register
    },
    {
        path:LOGIN_ROUTE,
        Component:Login
    },
    {
        path:MY_POSTS_ROUTE,
        Component:MyPostsPage
    },
    {
        path:EDIT_POST_ROUTE + '/:id',
        Component:EditPost
    },
    {
        path:CREATE_POST_ROUTE,
        Component:CreatePost
    },
    {
        path:MAIN_ROUTE,
        Component:MainPage
    }


]
