import axios, { AxiosInstance } from 'axios'
import { pathRoutes } from 'src/constants/paths'
import {
  clearLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setProfileToLS,
  setRefreshTokenToLS
} from './auth'
import { config } from 'src/constants/config'

class Http {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.refreshToken = getRefreshTokenFromLS()
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (config.headers.Authorization && this.accessToken) {
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use((response) => {
      const url = response.config.url
      if (url === pathRoutes.login || url === pathRoutes.register) {
        const data: AuthResponse = response.data
        this.accessToken = data.data.access_token
        this.refreshToken = data.data.refresh_token
        setProfileToLS(data.data.user)
        setAccessTokenToLS(this.accessToken)
        setRefreshTokenToLS(this.refreshToken)
      } else if (url === pathRoutes.logout) {
        this.accessToken = ''
        this.refreshToken = ''
        clearLS()
      }
      return response
    })
  }
}

export const http = new Http().instance
