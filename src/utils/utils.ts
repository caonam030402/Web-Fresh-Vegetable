export class accessTokenLS {
  static setAccessTokenToLS = (accessToken: string) => {
    localStorage.setItem('access-token', accessToken)
  }
  static getAccessTokenFromLS = () => {
    localStorage.getItem('access-token')
  }
}

export class profileLS {
  static setProfileToLS = (accessToken: string) => {
    localStorage.setItem('profile', accessToken)
  }
  static getAccessTokenFromLS = () => {
    localStorage.getItem('access-token')
  }
}

export const removeAllLS = () => {}
