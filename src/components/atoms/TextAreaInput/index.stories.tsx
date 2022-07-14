import React from 'react';
import { Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import TextAreaInput, { TextAreaInputProps } from '@atoms/TextAreaInput/index';

export default {
  title: 'Atoms/TextAreaInput',
  component: TextAreaInput,
};

const Template: Story<TextAreaInputProps> = (args) => {
  const { control } = useForm();
  return <TextAreaInput control={control} {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {name: 'textArea',};
