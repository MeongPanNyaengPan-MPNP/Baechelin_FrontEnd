import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import LinkItem, { LinkItemProps } from '@atoms/Link/index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Atoms/LinkItem',
  component: LinkItem,
  argTypes: { textSize: { control: 'number' } },
  decorators: [
    (Storys) => (
      <MemoryRouter>
        <Storys />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof LinkItem>;

const Template: Story<LinkItemProps> = (args) => <LinkItem {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  textSize: 2.4,
  children: '링크',
};
