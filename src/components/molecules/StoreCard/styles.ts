import styled from 'styled-components';

export const CardItem = styled.article<{ size: string }>`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  height: ${(props) => props.size === 'l' && '275px'};
  height: ${(props) => props.size === 'm' && '315px'};
`;
export const CardFigureArea = styled.div<{ size: string }>`
  height: ${(props) => props.size === 'l' && '205px'};
  height: ${(props) => props.size === 'm' && '145px'};
`;
export const CartTextArea = styled.div`
  padding: 20px 10px;
  background: #fff;
`;
