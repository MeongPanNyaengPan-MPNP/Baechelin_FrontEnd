import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const LoginBtn = styled.a<{ socialType: 'naver' | 'kakao' | 'google' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 54px;
  text-align: center;
  padding: 0 50px;

  & + & {
    margin-top: 22px;
  }

  & > figure {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 35px;
    height: 35px;
    background-size: contain;
    background-position: center center;
    text-indent: -100000rem;
  }

  ${(props) => {
    if (props.socialType === 'naver') {
      return css`
        background-color: #19ce60;

        > figure {
          background-image: url('/img/ui/ic_naver.png');
        }
      `;
    }
    if (props.socialType === 'google') {
      return css`
        background-color: #f2f2f2;

        > figure {
          background-image: url('/img/ui/ic_google.png');
        }
      `;
    }
    if (props.socialType === 'kakao') {
      return css`
        background-color: #ffe809;

        > figure {
          background-image: url('/img/ui/ic_kakao.png');
        }
      `;
    }
  }}
}
`;
