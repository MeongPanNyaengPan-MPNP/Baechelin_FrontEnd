import styled, { css } from 'styled-components';

type ContainerProps = {
  size?: 'big' | 'regular' | 'small' | 'xsmall';
  align?: string;
};

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 3rem;
  width: 58rem;
  justify-content: space-between;
  ${(props) => {
    if (props.size === 'xsmall') {
      return css`
        width: 100%;
        padding: 0;
      `;
    }
  }}
`;
export const FigureArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 26.8rem;
  height: 4.4rem;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 20px;
`;
