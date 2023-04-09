/* eslint-disable import/named */
import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    ;(this.instance = axios.create({
      baseURL: '',
      headers: {
        'Content-Type': 'application/json'
      }
    })),
      this.instance.interceptors.request.use((req) => {
        return req
      }),
      this.instance.interceptors.response.use((res) => {
        return res
      })
  }
}

const http = new Http().instance

export default http
