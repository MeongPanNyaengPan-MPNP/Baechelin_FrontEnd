import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const TttleBox = styled.div`
  display: flex;
  align-items: initial;
  width: 100%;
  margin-top: 25px;

  .thumbnail {
    width: 180px;
  }

  .thumbnail > div {
    width: 100%;
  }

  h2 > span {
    white-space: normal;
  }
`;

export const TextArea = styled.div`
  margin-left: 20px;
`;
