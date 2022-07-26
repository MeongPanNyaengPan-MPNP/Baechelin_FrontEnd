import React from 'react';
import Span from '@atoms/Span';
import * as S from './styles';

function LoginButton({ src, socialType }: { src: string; socialType: 'naver' | 'kakao' | 'google' }) {
  const [socialName, setSocialName] = React.useState<string>('');
  React.useEffect(() => {
    if (socialType === 'naver') {
      setSocialName('네이버');
    }
    if (socialType === 'kakao') {
      setSocialName('카카오');
    }
    if (socialType === 'google') {
      setSocialName('구글');
    }
  }, [socialType]);
  return (
    <S.LoginBtn href={src} socialType={socialType}>
      <figure>{socialType}아이콘</figure>
      <Span fontSize="1.8rem" fontWeight="bold">
        <>{socialName}로 시작하기</>
      </Span>
    </S.LoginBtn>
  );
}

export default LoginButton;
