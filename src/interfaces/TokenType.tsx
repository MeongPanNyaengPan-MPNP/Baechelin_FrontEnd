export interface TokenType {
  nickname: string;
  sub: string; // email
  exp: number;
}

export interface TokenResponseType {
  access_token: string;
}

export interface UserInfoType {
  name: string;
  email: string;
}
