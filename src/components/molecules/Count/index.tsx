import React from 'react';

import Span from '@atoms/Span';

interface CountProps {
  currentCount: number;
  maxCount: number;
}

function Count({ currentCount, maxCount }: CountProps) {
  return <Span fontSize="2rem">{`${currentCount}/${maxCount}`}</Span>;
}

export default Count;
