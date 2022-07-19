import styled from 'styled-components';
import Span from '@atoms/Span';

export const TagTitle = styled(Span)`
  margin-bottom: 15px;
`;
export const TagList = styled.ul`
  & + & {
    margin-top: 50px;
  }
`;
