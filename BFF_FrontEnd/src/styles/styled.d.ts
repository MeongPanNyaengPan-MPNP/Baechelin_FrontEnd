import 'styled-components';
import { ColorsTypes, BgColorTypes,materialPaletteTypes} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    bgColor: BgColorTypes;
    materialPalette : materialPaletteTypes;
  }
}
