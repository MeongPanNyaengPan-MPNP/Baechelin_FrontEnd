import { Color } from '@constants/styles';
import styled from 'styled-components';

export const Container = styled.div<{ height: string; justify?: string }>`
  display: flex;
  justify-content: ${({ justify }) => justify || 'null'};
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height || '1.5rem'};
  cursor: pointer;

  :hover {
    background-color: ${Color.lightGrey};
    transition: all 0.3s ease-in-out;
  }
`;

export const folderNameWrapper = styled.div<{ height: string }>`
  display: block;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${({ height }) => height || '1rem'};
  width: 85px;
`;
