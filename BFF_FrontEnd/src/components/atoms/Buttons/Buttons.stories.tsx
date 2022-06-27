import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Buttons,{ButtonTypes} from '@atoms/Buttons/index';

export default {
  title: 'Material Button',
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

// eslint-disable-next-line react/function-component-definition
const Template: Story<ButtonTypes> = (args) => <Buttons {...args} />;
export const Large = Template.bind({});
Large.args = {size: "small"};
/*

FirstStory.args = {
  /!* 👇 The args you need here will depend on your component *!/
};
*/
