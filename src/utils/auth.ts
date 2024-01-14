export class accessTokenLS {
  static setAccessTokenToLS = (accessToken: string) => {
    return localStorage.setItem('access-token', accessToken)
  }
  static getAccessTokenFromLS = () => {
    return localStorage.getItem('access-token') || ''
  }
}

export class refreshTokenLS {
  static setRefreshTokenToLS = (refreshToken: string) => {
    return localStorage.setItem('refresh-token', refreshToken)
  }
  static getRefreshTokenFromLS = () => {
    return localStorage.getItem('refresh-token') || ''
  }
}

export class profileLS {
  static setProfileToLS = (profile: User) => {
    return localStorage.setItem('profile', JSON.stringify(profile))
  }
  static getAccessTokenFromLS = () => {
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(profile) : null
  }
}

export const clearLS = () => {
  localStorage.removeItem('access-token')
  localStorage.removeItem('profile')
}
