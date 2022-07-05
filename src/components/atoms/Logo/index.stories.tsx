/* @flow */

import React from 'react';
import Logo, { LogoProps } from '@atoms/Logo';
import { Story } from '@storybook/react';

export default {
  title: 'Atoms/Logo',
  component: Logo,
};

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  height: '5rem',
  width: '5rem',
  src: 'https://cdn.icon-icons.com/icons2/2657/PNG/256/instagram_icon_161086.png',
  cursor: 'pointer',
};
