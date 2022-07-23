import React from 'react';
import styled from 'styled-components';
import Span from '@atoms/Span';

type SnackbarsProps = {
  message: string;
  duration?: number;
};

const Message = styled.span<{ duration: number }>`
  display: inline-block;
  max-width: 400px;
  margin: 10px auto;
  padding: 6px 20px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  border-radius: 1em;
    // animation: showTransition ${(props) => props.duration}s ease-in-out forwards;
  @keyframes showTransition {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
`;

function SnackBars(props: SnackbarsProps) {
  const { message, duration = 3 } = props;
  return (
    <Message duration={duration}>
      <Span fontSize="1.6rem">{message}</Span>
    </Message>
  );
}

export default SnackBars;
