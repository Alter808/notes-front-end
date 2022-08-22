import axios from 'axios'

const url = process.env.REACT_APP_API_URL

const instance = axios.create({
  baseURL: url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default instance
