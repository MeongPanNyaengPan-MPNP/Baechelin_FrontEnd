import React from 'react';
import { FormGroup } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import CheckBoxInput from '@atoms/CheckBoxInput';
import { FormValues } from '../../organism/ReviewForm';
import { CheckBoxProps } from '../../../types/formTypes';


type CheckBoxFormProps = {
  boxHidden?: boolean;
  data?: CheckBoxProps[];
  name: string;
  [prop: string]: any;
}

function CheckBoxForm({
                        boxHidden = false,
                        data,
                        name,
                      }: CheckBoxFormProps) {
  const methods = useFormContext<FormValues>();
  return (
    <FormGroup>
      {data?.map((item, index) => (
          <CheckBoxInput item={item} name={name} key={item.label} number={index} boxHidden={boxHidden} {...methods} />
        ),
      )}
    </FormGroup>
  );
}

export default CheckBoxForm;
