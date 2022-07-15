import styled from 'styled-components';
// eslint-disable-next-line import/prefer-default-export
export const CardSlideGroup = styled.div<{ id?: string; paginationId?: string }>`
  ${(props) => `#${props.id}NextButton`} {
    transform: translateX(120%);
  }

  ${(props) => `#${props.id}PrevButton`} {
    transform: translateX(-120%);
  }

  ${(props) => `#${props.paginationId}`} {
    margin-bottom: -10px;
  }
`;
