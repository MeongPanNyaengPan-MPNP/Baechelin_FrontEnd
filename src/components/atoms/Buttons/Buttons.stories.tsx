import React from 'react';
import { Story } from '@storybook/react';
import Buttons, { ButtonsProps } from '@atoms/Buttons/index';

export default {
  title: 'Atoms/Buttons',
  component: Buttons,
  argTypes: {
    bgColor: { control: 'color' },
    border: { control: 'color' },
  },
  args: {
    border: '#9347b9',
    bgColor: '#1e9ec5',
  },
};

const Template: Story<ButtonsProps> = (args) => <Buttons {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  size: 'medium',
  border: '#a8d5f6',
  bgColor: '#1e9ec5',
  color: '#fff',
  round: '0.5em',
  fontSize: '16px',
  children: 'Buttons',
};
