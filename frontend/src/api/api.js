import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const getUsers = async () => {
  const res = await api.get('/users')
  return res.data
}

export const createUser = async (data) => {
    const res = await api.post('/users', data)
    return res.data
} 

export const deleteUser = async (id) => {
    const res = await api.delete(`/users/${id}`)
    return res.data
}