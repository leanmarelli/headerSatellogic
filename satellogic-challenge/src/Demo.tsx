import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './index.css'

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        flexGrow: 1
      }}
    >

      <Grid container spacing={2}>
        <Grid className='cols1' item xs={6} md={3}>
          <h1>Test</h1>
        </Grid>
        <Grid className='cols2' item xs={6} md={6}>
            <a className='link'>
              Link 1
            </a>
            <a className='link'>
              Link 2
            </a>
            <a className='link'>
              Link 3
            </a>
            <a className='link'>
              Link 4
            </a>
        </Grid>
        <Grid className='cols3' item xs={6} md={3}>
            <IconButton sx={{ ml: 2 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <p className='modo'>{theme.palette.mode} mode</p>
            <Switch {...label} onClick={colorMode.toggleColorMode} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
