import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'http://localhost:8000'
})

const token = localStorage.getItem('token')
if (token) {
  HTTP.defaults.headers.common['Authorization'] = 'Token ' + token
}

export let headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Token ' + localStorage.getItem('token')
}