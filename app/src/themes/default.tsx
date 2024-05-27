import type {} from '@mui/x-data-grid/themeAugmentation';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  palette: {
    background: {
      default: '#f3f3f3',
    },
    text: {
      primary: '#000',
    },
    primary: {
      main: '#3546a2',
    },
    secondary: {
      main: '#c6362b'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderTop: 0,
          borderRight: 0,
          borderLeft: 0,
          background: '#fff',
          boxShadow: 'none',
        },
      },
    },
    MuiTableHead: {
      styleOverrides:{
        root: {
          background: '#3546a2',
          color: '#fff'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          border: 0,
          '& input': {
            padding: 10,
          },
          '&:after, &:before': {
            display: 'none',
          },
        },
      },
    },
  },
  mixins: {
    MuiDataGrid: {
      // Pinned columns sections
      pinnedBackground: '#3546a2',
      // Headers, and top & bottom fixed rows
      containerBackground: '#3546a2',
    },
  },
});
