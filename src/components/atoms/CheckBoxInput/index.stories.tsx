import React from 'react';
import { Story } from '@storybook/react';
import CheckBoxInput, { CheckBoxInputProps } from '@atoms/CheckBoxInput/index';

export default {
  title: 'CheckBoxInput',
  component: CheckBoxInput,
};

const Template: Story<CheckBoxInputProps> = (args) => <CheckBoxInput {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  name: 'checkbox',
  label: 'label',
};
