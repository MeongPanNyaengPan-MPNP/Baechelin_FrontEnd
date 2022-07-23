/* @flow */

import React from 'react';
import SearchInput, { SearchInputProps } from '@atoms/SearchInput';
import { Story } from '@storybook/react';

export default {
  title: 'Atoms/SearchInput',
  component: SearchInput,
};

const Template: Story<SearchInputProps<any>> = (args) => <SearchInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disableCloseOnSelect: false,
  autoComplete: true,
  autoHighlight: false,
};
