import 'styled-components';
import { ColorsTypes, BgColorTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    bgColor: BgColorTypes;
  }
}
