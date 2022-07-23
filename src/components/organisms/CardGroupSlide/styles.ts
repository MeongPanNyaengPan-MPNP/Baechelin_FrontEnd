import styled from 'styled-components';
// eslint-disable-next-line import/prefer-default-export
export const CardSlideGroup = styled.div<{ id?: string; paginationId?: string }>`
  position: relative;
  z-index: 1;

  ${(props) => `#${props.id}NextButton`} {
    transform: translate(120%, -30px);
  }

  ${(props) => `#${props.id}PrevButton`} {
    transform: translate(-120%, -30px);
  }
`;
