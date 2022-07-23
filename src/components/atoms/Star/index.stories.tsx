/* @flow */

import React from 'react';
import Star, { StarTypes } from '@atoms/Star';
import { Story } from '@storybook/react';

export default {
  title: 'Atoms/Star',
  component: Star,
};

const Template: Story<StarTypes> = (args) => <Star {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 1,
  precision: 0.5,
};
