/* @flow */

import React from 'react';
import Icon, { IconProps } from '@atoms/Icon';
import { Story } from '@storybook/react';

export default {
  title: 'Atoms/Icon',
  component: Icon,
};

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  height: '5rem',
  width: '5rem',
  src: 'https://cdn.icon-icons.com/icons2/2657/PNG/256/instagram_icon_161086.png',
  cursor: 'pointer',
};
