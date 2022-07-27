const LOGIN = {
  FAILED_MESSAGE: 'E-FAI500', // 서버에서 오류가 발생하였습니다.
  INVALID_ACCESS_TOKEN: 'E-IAT401', // 유효하지 않은 Access Token입니다.
  INVALID_REFRESH_TOKEN: 'E-IRT401', // 유효하지 않은 Refresh Token입니다.
  NOT_EXPIRED_TOKEN_YET: 'E-NET401', // 만료되지 않은 JWT 토큰입니다.
  EXPIRED_TOKEN: 'E-EXT401', // 만료된 JWT 토큰입니다.
  WRONG_TYPE_TOKEN: 'E-WTT401', // 잘못된 JWT 토큰입니다.
  WRONG_TYPE_SIGNATURE: 'E-WTS401', // 잘못된 JWT 서명입니다.
  ACCESS_DENIED: 'E-ACD401', // 접근이 거부되었습니다.
  TOKEN_NOT_EXIST: 'E-TNE401', // 토큰이 존재하지 않습니다.
  ALREADY_LOGIN_ACCOUNT: 'E-ALA405', // 다른 계정으로 회원가입 되어있습니다.
};

// eslint-disable-next-line import/prefer-default-export
export { LOGIN };
