import { DefaultTheme } from 'styled-components';

const bgColor = {
  white: '#fff',
  gray: '#efefef',
  black: '#000',
};
const colors = {
  white: '#fff',
  black: '#000',
};
export type ColorsTypes = typeof colors;
export type BgColorTypes = typeof bgColor;
const theme: DefaultTheme = {
  colors,
  bgColor,
};

export default theme;
