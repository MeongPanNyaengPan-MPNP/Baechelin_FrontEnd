import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          whiteSpace: 'normal',
          wordBreak: 'break-all',
        },
      },
    },
  },
  typography: { fontSize: 19.6 },
});

export default theme;
