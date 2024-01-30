import axios, { type AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = ""
    this.instance = axios.create({
      baseURL: 'https://fakestoreapi.com',
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        // if (response.data.code === '200') {
        //   if (response.config.url === URL_LOGIN) {
        //     const token = (response.data as authResponse).data.token
        //     this.accessToken = `Bearer ${token.access_token.token}`
        //     setAccessTokenToLS(this.accessToken)
        //   }
        // }
        return response
      },
      // function (error) {
      //   if (error.response.status === 401) {
      //     clearLS()
      //     if (window.location.pathname !== '/login') {
      //       window.location.href = '/login'
      //     }
      //   }
      //   return Promise.reject(error)
      // }
    )
  }
}

const http = new Http().instance
export default http
