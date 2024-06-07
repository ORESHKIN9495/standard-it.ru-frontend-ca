import axios from 'axios'
// import axiosCacheAdapter from "axios-cache-adapter";
const baseURL = import.meta.env.VITE_HTTP

const instance = axios.create({
  baseURL
  //   adapter: axiosCacheAdapter.setupCache({
  //     maxAge: 15 * 60 * 1000, // Cache responses for 15 minutes
  //   }).adapter,
})

// set loading state before each request
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// set loading state after each response
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { instance as axios }
