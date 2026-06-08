import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const getUsers = async () => {
  const res = await api.get('/users')
  return res.data
}

