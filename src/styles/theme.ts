import { createTheme } from '@mui/material';

const customFontFamiliy = [
  'Noto sans kr',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');
const theme = createTheme({
  typography: { fontFamily: customFontFamiliy },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
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
  },
});

export default theme;
