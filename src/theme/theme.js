import { createTheme } from '@mui/material/styles';

/**
 * Shared typography + shape + component overrides applied to both light and dark themes.
 */
const commonSettings = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'rgba(149, 157, 165, 0.1) 0px 8px 24px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 10,
          paddingLeft: 20,
          paddingRight: 20,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '0.75rem',
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5f6368',
    },
    background: {
      default: '#f5f5f7',
      paper: '#ffffff',
    },
    text: {
      primary: '#202124',
      secondary: '#5f6368',
    },
    success: {
      main: '#34a853',
      light: '#e6f4ea',
    },
    error: {
      main: '#ea4335',
      light: '#fce8e6',
    },
    warning: {
      main: '#fbbc04',
      light: '#fef7e0',
    },
    info: {
      main: '#4285f4',
      light: '#e8f0fe',
    },
    divider: 'rgba(0,0,0,0.08)',
  },
  ...commonSettings,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#9e9e9e',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    success: {
      main: '#34a853',
      light: '#1a3a23',
    },
    error: {
      main: '#ea4335',
      light: '#3a1a18',
    },
    warning: {
      main: '#fbbc04',
      light: '#3a3010',
    },
    info: {
      main: '#4285f4',
      light: '#1a2a4a',
    },
    divider: 'rgba(255,255,255,0.08)',
  },
  ...commonSettings,
});
