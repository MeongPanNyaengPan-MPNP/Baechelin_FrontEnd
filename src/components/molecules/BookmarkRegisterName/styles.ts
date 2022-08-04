import styled from 'styled-components';

export const Container = styled.div<{ height: string; justify?: string; margin?: string }>`
  display: flex;
  justify-content: ${({ justify }) => justify || 'null'};
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height || '1.6rem'};
  margin: ${({ margin }) => margin || '0'};
  cursor: pointer;

  .MuiIcon-root {
    margin-right: 0.2em;
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
