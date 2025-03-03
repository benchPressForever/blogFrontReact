import { $authHost,$host } from ".";



export const getPosts = async () => {
    const {data} = await $host.get('api/posts')
    return data['data']
}

export const getOnePost = async (id) => {
    const {data} = await $host.get('api/posts/' + id)
    return data['data']
}

export const addLike = async (id) => {
    const {data} = await $authHost.post('api/posts/add/like/'+id)
    return data
}

export const delLike = async (id) => {
    const {data} = await $authHost.post('api/posts/del/like/'+id)
    return data
}

export const deletePost = async (id) => {
    const {data} = await $authHost.delete('api/posts/delete/'+id)
    return data
}

export const updatePost = async (post) => {
    const {data} = await $authHost.put('api/posts/update/'+post.id,post)
    return data
}

export const createPost = async (post) => {
    const {data} = await $authHost.post('api/posts/create',post)
    return data
}

