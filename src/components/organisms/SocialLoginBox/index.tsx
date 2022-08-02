import React from 'react';
import LoginButton from '@molecules/LoginButton';
import Span from '@atoms/Span';
import { useLocation } from 'react-router-dom';
import * as S from './styles';

function SocialLoginBox() {
  const state: any = useLocation();
  const prevPathProps = state?.state?.destinationPath;
  const prevPath = prevPathProps ? prevPathProps.split('/').join('-') : null;
  const getLink = React.useCallback(
    (social: string) => `https://api.bae-chelin.com/oauth2/authorization/${social}?redirect_uri=
https://bae-chelin.com/user/oauth/redirect${`/${prevPath}` || ''}`,
    [prevPath],
  );
  const redirectTest = `http://localhost:12345/user/oauth/redirect/${
    prevPath || ''
    // eslint-disable-next-line max-len
  }?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMzE4MTQ3MTIwIiwicm9sZSI6IlJPTEVfQURNSU4iLCJleHAiOjE2NTk3NjA0NTR9.juziYqYYeUHoxdCn-0egZ62zRyz6Kzh0hO2zVY3uX6M`;
  return (
    <>
      <S.Title>
        <Span fontSize="4rem">로그인</Span>
      </S.Title>
      <S.LoginButtonGroup>
        <S.LoginButtonArea>
          <LoginButton src={getLink('kakao')} socialType="kakao" />
          <LoginButton src={getLink('naver')} socialType="naver" />
          <LoginButton src={getLink('google')} socialType="google" />
        </S.LoginButtonArea>
        <S.TextArea>
          <Span fontSize="1.8rem" textAlign="center">
            배슐랭은 사회적 교통약자가 쉽게 이용할 수 있는 배리어 프리 식당이나 카페 등 가게 정보를 알려주고 사용자 맞춤
            서비스를 제공합니다.
          </Span>{' '}
          <Span fontSize="1.8rem" textAlign="center">
            로그인 하시면 더 다양한 서비스를 즐기실 수 있습니다.
          </Span>
        </S.TextArea>
      </S.LoginButtonGroup>
      <a href={redirectTest}>.</a>
    </>
  );
}

export default SocialLoginBox;
