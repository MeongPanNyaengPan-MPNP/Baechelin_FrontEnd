import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Buttons,{ButtonTypes} from '@atoms/Buttons/index';

export default {
  title: 'Material Button',
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

const Template: Story<ButtonTypes> = (args) => <Buttons {...args} />;
export const Large = Template.bind({});
Large.args = {size: "small"};
