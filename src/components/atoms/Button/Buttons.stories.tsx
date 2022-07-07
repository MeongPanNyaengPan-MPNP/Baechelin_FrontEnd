import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import Buttons, { ButtonProps } from '@atoms/Buttons/index';

export default {
  title: 'Buttons',
  component: Buttons,
  argTypes: {
    bgColor: { control: 'color' },
    border: { control: 'color' },
  },
  args: {

    border: '#9347b9',
    bgColor: '#1e9ec5',
  },
} as ComponentMeta<typeof Buttons>;

const Template: Story<ButtonProps> = (args) => <Buttons {...args} />;
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
