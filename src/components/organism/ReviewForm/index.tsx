import React from 'react';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import TextInput from '@atoms/TextInput';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SelectBox from '@atoms/SelectBox';
import CheckBoxForm from '../../molcules/CheckBoxForm';

type FormValues = {
  test: string;
  meow: { [prop: string]: boolean };
  wow: string | ReadonlyArray<string> | number | undefined;
};

function ReviewForm() {
  const validationSchema = Yup.object().shape({
    test: Yup.string().required('Fullname is required').max(5, '넘침'),
    meowCheck: Yup.bool().oneOf([true], 'Accept Terms is required'),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: FormValues) => {
    console.log('data', data);
  };
  const checkBoxDummyData = {
    meowCheck:
      [{
        text: '으앙1',
        name: '으앙1',
      }, {
        text: '으앙2',
        name: '으앙2',
      }, {
        text: '으앙3',
        name: '으앙3',
      }, {
        text: '으앙4',
        name: '으앙4',
      }],
  };
  const SelectBoxDummyData = [{
    value: 10,
    label: '으어1',
  },
    {
      value: 11,
      label: '으dddddddddddddddddddd어2',
    }, {
      value: 12,
      label: '으어3',
    }];
  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckBoxForm checkBoxItems={checkBoxDummyData.meowCheck} control={control} errors={errors} />
        <TextInput name='test'
                   control={control} errors={errors} />
        <SelectBox name='wow' label='wow' control={control} options={SelectBoxDummyData} />
        <button type='submit'>제출</button>
      </form>
    </Container>
  );
}

export default ReviewForm;
