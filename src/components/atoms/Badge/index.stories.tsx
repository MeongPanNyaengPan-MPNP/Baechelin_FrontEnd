import React from 'react';
import { Story } from '@storybook/react';
import Badge, { BadgeProps } from '@atoms/Badge/index';

export default {
  title: 'Atoms/Badge',
  component: Badge,
};

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;
export const Basic = Template.bind({});
Basic.args = { size: 'm' };
