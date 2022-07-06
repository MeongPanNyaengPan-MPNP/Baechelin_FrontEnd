import React from 'react';
import Container from '@mui/material/Container';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CheckBoxForm from '@molecules/CheckBoxForm';
import { CheckBoxProps } from '../../../types/formTypes';

export type FormValues = {
  facility: CheckBoxProps[];
};

function ReviewForm() {
  const validationSchema = Yup.object().shape({ checkbox: Yup.bool().oneOf([true], 'Accept Terms is required') });
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };
  const meowCheck = [{
    label: '시설정보1',
    checked: false,
  },
    {
      label: '시설정보2',
      checked: false,
    }, {
      label: '시설정보3',
      checked: false,
    }];
  return (
    <Container maxWidth='sm'>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CheckBoxForm data={meowCheck} name='facility' />
          <button type='submit'>제출</button>
        </form>
      </FormProvider>
    </Container>
  );
}

export default ReviewForm;
