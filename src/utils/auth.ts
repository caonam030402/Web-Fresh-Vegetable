import { AxiosError, HttpStatusCode, isAxiosError } from 'axios'

export const setAccessTokenToLS = (accessToken: string) => {
  return localStorage.setItem('access-token', accessToken)
}
export const getAccessTokenFromLS = () => {
  return localStorage.getItem('access-token') || ''
}

export const setRefreshTokenToLS = (refreshToken: string) => {
  return localStorage.setItem('refresh-token', refreshToken)
}
export const getRefreshTokenFromLS = () => {
  return localStorage.getItem('refresh-token') || ''
}

export const setProfileToLS = (profile: User) => {
  return localStorage.setItem('profile', JSON.stringify(profile))
}
export const getProfileFromLS = () => {
  const profile = localStorage.getItem('profile')
  return profile ? JSON.parse(profile) : null
}

export const clearLS = () => {
  localStorage.removeItem('access-token')
  localStorage.removeItem('profile')
}

export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
