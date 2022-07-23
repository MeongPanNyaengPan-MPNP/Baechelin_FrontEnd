/* @flow */

import React from 'react';
import Icon, { IconProps } from '@atoms/Icon';
import { Story } from '@storybook/react';

export default {
  title: 'Atoms/Icon',
  component: Icon,
};

const Template: Story<IconProps> = (args) => (
  <>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <Icon {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = { iconName: 'star', color: 'blue', size: '1rem', cursor: 'pointer' };
