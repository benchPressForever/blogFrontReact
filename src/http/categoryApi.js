import { $authHost,$host } from ".";

export const getCategories = async () => {
    const {data} = await $host.get('api/categories')
    return data['data']
}