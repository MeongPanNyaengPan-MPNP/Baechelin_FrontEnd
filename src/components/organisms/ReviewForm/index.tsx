import React from 'react';
import Container from '@mui/material/Container';
import { FieldValues, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CheckBoxForm from '@molecules/CheckBoxForm';
import TextInput from '@atoms/TextInput';
import SelectBox from '@atoms/SelectBox';
import TextAreaInput from '@atoms/TextAreaInput';
import AddImage from '@molecules/AddImage';

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
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log('data', data);
  };
  const checkBoxDummyData = [
    {
      label: '시설정보1',
      checked: false,
    },
    {
      label: '시설정보2',
      checked: false,
    },
    {
      label: '시설정보3',
      checked: false,
    },
  ];
  const SelectBoxDummyData = [
    {
      value: 10,
      label: '으어1',
    },
    {
      value: 11,
      label: '으dddddddddddddddddddd어2',
    },
    {
      value: 12,
      label: '으어3',
    },
  ];
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckBoxForm control={control} data={checkBoxDummyData} name="facility" />
        <TextInput name="test" control={control} errors={errors} />
        <SelectBox name="selectBox" label="selectBox" control={control} options={SelectBoxDummyData} />
        <TextAreaInput name="textarea" control={control} />
        <AddImage name="files" getValues={getValues} setValue={setValue} control={control} />
        <button type="submit">제출</button>
        <button type="submit">제출</button>
      </form>
    </Container>
  );
}

export default ReviewForm;
