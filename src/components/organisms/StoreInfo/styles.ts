import styled, { css } from 'styled-components';

type ContainerProps = {
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
