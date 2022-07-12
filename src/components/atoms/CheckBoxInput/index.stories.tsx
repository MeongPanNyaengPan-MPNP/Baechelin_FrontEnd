import React from 'react';
import { Story } from '@storybook/react';
import CheckBoxInput, { CheckBoxInputProps } from '@atoms/CheckBoxInput/index';
import { useForm } from 'react-hook-form';

export default {
  title: 'Atoms/CheckBoxInput',
  component: CheckBoxInput,
  argTypes: { textSize: { control: 'number' } },
};

const Template: Story<CheckBoxInputProps> = (args) => {
  const { control } = useForm();
  return <CheckBoxInput control={control} {...args} />;
};

const dummyData = {
  label: 'CheckBoxInput',
  checked: false,
};
export const Basic = Template.bind({});
Basic.args = {
  name: 'checkbox',
  boxHidden: true,
  item: dummyData,
};
