import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export

export const FileAddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: #f2f2f2;

  > button {
    width: 100%;
  }
`;

export const FileUploaderWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-top: 20px;

  > figure {
    margin-right: 14px;
  }
`;
