import React from 'react';
import MuiRating, { RatingProps } from '@mui/material/Rating';

export interface StarTypes extends RatingProps {
  children?: React.ReactNode;
}

function Star(props: StarTypes) {
  const onChangeStar = (event: React.SyntheticEvent, value: number | null) => {
    console.log(value);
  };

  return <MuiRating name="half-rating" defaultValue={2.5} precision={0.5} onChange={onChangeStar} {...props} />;
}
export default Star;
