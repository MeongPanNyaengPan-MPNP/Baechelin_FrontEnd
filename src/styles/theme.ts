import { createTheme } from '@mui/material';

const theme = createTheme({
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
  typography: { fontSize: 19.6 },
});

export default theme;
