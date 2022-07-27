import styled from 'styled-components';
import { Color } from '@constants/styles';

export const Container = styled.div<{ height: string; justify?: string }>`
  position: relative;
  display: flex;
  justify-content: ${({ justify }) => justify || 'null'};
  flex-direction: row;
  align-items: center;
  width: 95%;
  height: ${({ height }) => height || '1.5rem'};
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

export const Input = styled.input<{ fontSize: string }>`
  margin-left: 1rem;
  border: 1px solid ${Color.grey};
`;

export const Button = styled.button`
  position: absolute;
  top: 0.1rem;
  right: 0;
`;
