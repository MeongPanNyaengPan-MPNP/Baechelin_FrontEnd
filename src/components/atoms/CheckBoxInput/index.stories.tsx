import React from 'react';
import { Story } from '@storybook/react';
import CheckBoxInput, { CheckBoxInputProps } from '@atoms/CheckBoxInput/index';
import { FieldValues, useForm } from 'react-hook-form';
import { STORE_FILTERS } from '@constants/store';

export default {
  title: 'Atoms/CheckBoxInput',
  component: CheckBoxInput,
  argTypes: { textSize: { control: 'number' } },
};

const Template: Story<CheckBoxInputProps<any>> = (args) => {
  const { control } = useForm();
  return <CheckBoxInput<FieldValues> {...args} control={control} />;
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'checkbox',
  
  item: STORE_FILTERS.FACILITY[0],
};
