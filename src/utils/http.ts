import axios, { AxiosInstance } from 'axios'
import { pathRoutes } from 'src/constants/paths'
import { accessTokenLS, clearLS, profileLS, refreshTokenLS } from './auth'
import { config } from 'src/constants/config'

class Http {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  constructor() {
    this.accessToken = accessTokenLS.getAccessTokenFromLS()
    this.refreshToken = refreshTokenLS.getRefreshTokenFromLS()
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

        accessTokenLS.setAccessTokenToLS(this.accessToken)
        refreshTokenLS.setRefreshTokenToLS(this.refreshToken)
        profileLS.setProfileToLS(data.data.user)
      } else if (url == pathRoutes.logout) {
        this.accessToken = ''
        this.refreshToken = ''
        clearLS()
      }
      return response
    })
  }
}

export const http = new Http().instance
