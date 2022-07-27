import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const FormErrMessage = styled.p<{ color?: string; opacity?: number }>`
  display: block;
  flex-shrink: 0;
  flex-wrap: wrap;
  font-size: 1.4rem;
  color: ${(props) => props.color || `#db4c4c`};
  opacity: ${(props) => props.opacity || 1};
  padding: 10px 2px;
  font-weight: 500;
`;
