export type TypeLogin = {
    email: string,
    password: string
  };
  
  export type TypeLoginResponse = {
    accessToken: string,
    user: {
      email: string
    }
  }
  