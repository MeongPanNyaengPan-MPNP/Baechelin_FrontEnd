import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<{ type: 'horizontal' | 'vertical' }>`
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
        align-items: center;
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
`;

export const TextArea = styled.div<{ margin?: string; size?: 'big' | 'regular' | 'small' }>`
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
  }}
`;
