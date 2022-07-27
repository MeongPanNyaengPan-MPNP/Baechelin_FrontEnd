import React from 'react';
import MuiRating, { RatingProps } from '@mui/material/Rating';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { FormErrMessage } from '@styles/ui';

export type StarTypes = {
  children?: React.ReactNode;
  setvalue?: UseFormSetValue<any>;
  max?: number;
  control?: Control<FieldValues>;
  average?: number;
} & RatingProps;

const RatingInput = styled.input`
  background: none;
  font-size: 1.8rem;
  vertical-align: 0.7rem;
  margin-left: 12px;
`;

function Star(props: StarTypes) {
  const { setvalue, control, name = 'rating', average, size, max, readOnly, sx, ...restProps } = props;
  const [value, setValue] = React.useState<number | null>(average || 0);
  const onChangeStar = (event: React.SyntheticEvent, rate: number | null) => {
    if (setvalue && rate && rate >= 0) {
      setValue(rate);
      setvalue(name, [rate]);
    }
  };
  return (
    <>
      <MuiRating
        name="half-rating"
        size={size}
        max={max}
        precision={0.5}
        readOnly={readOnly}
        onChange={onChangeStar}
        value={value || 0}
        icon={<StarIcon color="primary" sx={sx} />}
        emptyIcon={<StarIcon fontSize="inherit" color="secondary" sx={sx} />}
        {...restProps}
      />
      {average && <span className="rating-value">{max === 1 && readOnly && value}</span>}
      {control && (
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <RatingInput disabled {...field} value={field.value || 0} type="number" />
              {fieldState.error && <FormErrMessage>{fieldState.error?.message}</FormErrMessage>}
            </>
          )}
        />
      )}
    </>
  );
}

export default Star;
