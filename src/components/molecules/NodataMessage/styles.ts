import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const NodataImg = styled.figure`
  display: inline-block;
  background-image: url('/img/ui/no_data.svg');
  background-size: contain;
  background-position: center center;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;
export const NoDataBox = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
  background: #fff;

  span {
    line-height: 1.4;
  }

  button {
    margin-top: 15px;
  }
`;
