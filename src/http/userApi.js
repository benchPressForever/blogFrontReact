import { $authHost,$host } from ".";


export const registration = async (name,email,password,confirm_password) => {
    const {data} = await $host.post('api/register',{name,email,password,confirm_password})
    localStorage.setItem('token',data.token)
    return data
}

export const login = async (email,password) => {
    const {data} = await $host.post('api/login',{email,password})
    localStorage.setItem('token',data['data'].token)
    return data['data']
}

export const logout = async () => {
    const {data} = await $authHost.post('api/logout')
    localStorage.removeItem('token')
    return data
}