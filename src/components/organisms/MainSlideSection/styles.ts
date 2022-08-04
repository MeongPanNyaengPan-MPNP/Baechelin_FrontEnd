import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const MainStoreListSection = styled.section`
  position: relative;
  max-width: 1240px; //TODO : Container 사이즈에 맞추기
  padding: 0 20px;
  margin: 30px auto 70px;
  min-height: 360px;

  & p[aria-label='link'] {
    margin-bottom: 18px;
  }
`;

export const SkeletonContainer = styled.div<{ margin?: number }>`
  display: flex;
  flex-wrap: nowrap;
  margin: ${(props) => (props.margin ? `0 -${props.margin} 0` : 0)};
`;
