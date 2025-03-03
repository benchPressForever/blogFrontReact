import { $authHost,$host } from ".";

export const commentCreate = async (comment) => {
    const {data} = await $authHost.post('api/comments/create',comment)
    return data
}