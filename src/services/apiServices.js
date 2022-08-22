import axios from 'axios'

const url = 'http://localhost:8000/api'

const instance = axios.create({
  baseURL: url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default instance
