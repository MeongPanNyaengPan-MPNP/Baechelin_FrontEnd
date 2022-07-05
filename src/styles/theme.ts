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
});

export default theme;
