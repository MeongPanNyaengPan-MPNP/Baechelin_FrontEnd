/* @flow */

import React from 'react';
import Span, { SpanProps } from '@atoms/Span';
import { Story } from '@storybook/react';

export default {
  title: 'Atoms/Span',
  component: Span,
};

const Template: Story<SpanProps> = (args) => <Span {...args} />;

export const Primary = Template.bind({});
Primary.args = { color: 'blue', children: 'Example' };
