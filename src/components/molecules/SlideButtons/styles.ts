import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const SlideButtonArea = styled.div<{ color?: string; hover?: boolean; wide?: boolean }>`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 1;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    opacity: ${(props) => props.hover && 0.4};

    svg {
      font-size: 3rem;
      color: ${(props) => props.color || '#3B3B3B'};
      color: ${(props) => props.hover && props.color};
    }

    &:hover {
      opacity: ${(props) => props.hover && 1};
    }
  }
`;
