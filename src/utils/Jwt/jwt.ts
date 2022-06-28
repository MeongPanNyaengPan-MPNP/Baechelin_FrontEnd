import jwtDecode from "jwt-decode";
import {TokenType} from "../../interfaces/TokenType";


export const isExist = (token: string) => {
  if(!token) return false

  const decode = jwtDecode<TokenType>(token);
  if(!decode) return false

  return true;
}

export const isExp = (token: string) => {
  if(!token) {
    return
  }
  const decode = jwtDecode<TokenType>(token);
  if (decode.exp > new Date().getTime() / 1000) {
    return true;
  }
  return false;
}

export const getEmail = (token: string) => {
  const decode = jwtDecode<TokenType>(token);
  return decode.sub;
}
export const getNickname = (token: string) => {
  const decode = jwtDecode<TokenType>(token);
  return decode.nickname;
}
