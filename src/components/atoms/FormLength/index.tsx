import React from 'react';
import styled from 'styled-components';
import { Color } from '@constants/styles';

const Container = styled.p`
  text-align: right;
  font-size: 1.4rem;
  display: block;
`;
const CurNum = styled.span<{ active?: boolean }>`
  color: ${(props) => (props.active ? Color.orange : Color.black)};
`;

function FormLength({ length = 0, max }: { length: number; max: number }) {
  const active = length > max;
  return (
    <Container className="form_length">
      <CurNum active={active}>{length}</CurNum>
      {` / `}
      <span>{max}</span>
    </Container>
  );
}

export default FormLength;
