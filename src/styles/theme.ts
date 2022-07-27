import { createTheme } from '@mui/material';

const customFontFamiliy = [
  'Noto sans kr',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
].join(',');
const theme = createTheme({
  typography: { fontFamily: customFontFamiliy },
  palette: {
    primary: { main: '#ED6F2A' },
    secondary: {
      main: '#E6E6E6',
      contrastText: '#3B3B3B',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1240,
      xl: 1536,
    },
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          whiteSpace: 'normal',
          wordBreak: 'break-all',
        },
      },
    },
    MuiContainer: { styleOverrides: { root: { width: 'inherit' } } },
    MuiIcon: {
      styleOverrides: {
        fontSizeLarge: '2rem',
        fontSizeSmall: '1.5rem',
      },
    },
  },
});

export default theme;
