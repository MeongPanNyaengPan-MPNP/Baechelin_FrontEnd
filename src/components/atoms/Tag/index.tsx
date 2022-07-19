import React from 'react';
import styled from 'styled-components';

export type TagProps = {
  tagName: string;
  bgColor?: string;
  fontSize?: string;
};
const Tag = styled.div<{ bgColor: string; fontSize: string }>`
  min-width: 100px;
  margin-right: 10px;
  background: #f2f2f2;
  text-align: center;
  padding: 5px;
  font-size: ${(props) => props.fontSize || '1.2rem'};
`;

function TagItem({ tagName, bgColor = ' #f2f2f2', fontSize = '1.2rem' }: TagProps) {
  return (
    <Tag bgColor={bgColor} fontSize={fontSize}>
      {tagName}
    </Tag>
  );
}

export default TagItem;
