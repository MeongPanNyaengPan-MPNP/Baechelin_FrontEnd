export interface TokenType {
  sub: string; // email
  role: string;
  exp: number;
}

export interface TokenResponseType {
  token: string;
}

export interface UserInfoType {
  name: string;
  email: string;
}
