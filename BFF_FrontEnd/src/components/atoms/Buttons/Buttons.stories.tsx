// YourComponent.stories.ts|tsx

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Buttons from '@atoms/Buttons/index';
// 👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Material Button',
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args} />;

export const Large = Template.bind({});
Large.args = {size: "small",};
/*

FirstStory.args = {
  /!* 👇 The args you need here will depend on your component *!/
};
*/
