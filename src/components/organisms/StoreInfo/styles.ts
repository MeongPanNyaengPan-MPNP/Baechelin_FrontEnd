import styled, { css } from 'styled-components';

type ContainerProps = {
  type: 'horizontal' | 'vertical';
  size?: 'big' | 'regular' | 'small' | 'xsmall';
  align?: string;
};

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 58rem;
  padding: 3rem;

  ${(props) => {
    if (props.type === 'horizontal') {
      return css`
        width: 100%;
        display: flex;
        flex-direction: initial;
        align-items: ${props.align || `center`};
        padding-left: 0;

        > div:first-child {
          > div {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 100%;

            img {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
            }
          }
        }
      `;
    }
  }}
  ${(props) => {
    if (props.size === 'xsmall') {
      return css`
        width: 100%;
        padding: 0;
      `;
    }
  }}
`;

export const TextArea = styled.div<{ margin?: string; size?: 'big' | 'regular' | 'small' | 'xsmall' }>`
  ${(props) => {
    if (props.size === 'regular') {
      return css`
        margin-left: 50px;
      `;
    }
    if (props.size === 'small') {
      return css`
        margin-left: 16px;
      `;
    }
    if (props.size === 'xsmall') {
      return css`
        margin-left: 0px;
      `;
    }
  }}
`;
