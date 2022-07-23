import React from 'react';
import { Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import SelectBox, { SelectBoxProps } from '@atoms/SelectBox/index';

export default {
  title: 'Atoms/SelectBox',
  component: SelectBox,
};

const Template: Story<SelectBoxProps> = (args) => {
  const { control } = useForm();

  return <SelectBox control={control} {...args} />;
};

const SelectBoxDummyData = [
  {
    value: 10,
    label: 'data1',
  },
  {
    value: 11,
    label: 'data2',
  },
  {
    value: 12,
    label: 'data3',
  },
];
export const Basic = Template.bind({});
Basic.args = {
  name: 'selectbox',
  label: 'placeholder',
  data: SelectBoxDummyData,
};
