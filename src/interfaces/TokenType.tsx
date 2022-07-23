export interface TokenType {
  nickname: string;
  sub: string;// email
  exp: number;
}

export interface TokenResponseType {
  access_token: string
}
