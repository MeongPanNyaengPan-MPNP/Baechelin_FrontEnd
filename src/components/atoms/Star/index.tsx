import React from 'react';
import MuiRating, { RatingProps } from '@mui/material/Rating';

export interface StarTypes extends RatingProps {
  children?: React.ReactNode;
  max?: number;
}

function Star(props: StarTypes) {
  const onChangeStar = (event: React.SyntheticEvent, value: number | null) => {
    console.log(value);
  };
  const { max, value, readOnly } = props;
  return (
    <>
      <MuiRating name="half-rating" defaultValue={2.5} precision={0.5} onChange={onChangeStar} {...props} />
      <span className="rating-value">{max === 1 && readOnly && value}</span>
    </>
  );
}

export default Star;
