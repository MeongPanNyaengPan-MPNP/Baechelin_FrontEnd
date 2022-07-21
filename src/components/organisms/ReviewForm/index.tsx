import React from 'react';
import Container from '@mui/material/Container';
import { FieldValues, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from '@atoms/TextInput';
import TextAreaInput from '@atoms/TextAreaInput';
import AddImage from '@molecules/AddImage';
import CheckBoxGroup from '@molecules/CheckBoxGroup';
import { STORE_FILTERS } from '@constants/store';

function ReviewForm() {
  const validationSchema = Yup.object().shape({ checkbox: Yup.bool().oneOf([true], 'Accept Terms is required') });
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log('data', data);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckBoxGroup control={control} data={STORE_FILTERS.CATEGORY} name="facility" />
        <TextInput name="test" control={control} errors={errors} />
        <TextAreaInput name="textarea" control={control} />
        <AddImage name="files" getValues={getValues} setValue={setValue} control={control} />
        <button type="submit">제출</button>
        <button type="submit">제출</button>
      </form>
    </Container>
  );
}

export default ReviewForm;
