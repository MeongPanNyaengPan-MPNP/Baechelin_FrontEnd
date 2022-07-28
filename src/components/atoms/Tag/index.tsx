import React from 'react';
import styled from 'styled-components';

export type TagProps = {
  tagName: string;
  bgColor?: string;
  fontSize?: string;
};
const Tag = styled.li<{ bgColor: string; fontSize: string }>`
  display: inline-block;
  min-width: 100px;
  border-radius: 5em;
  font-size: 1.2rem;
  font-weight: 500;
  margin-right: 8px;
  background: #f2f2f2;
  text-align: center;
  padding: 5px 10px;
  font-size: ${(props) => props.fontSize || '1.2rem'};
  margin-bottom: 6px;
`;

function TagItem({ tagName, bgColor = ' #f2f2f2', fontSize = '1.2rem' }: TagProps) {
  return (
    <Tag bgColor={bgColor} fontSize={fontSize}>
      {tagName}
    </Tag>
  );
}

export default TagItem;
