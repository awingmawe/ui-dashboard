import * as React from 'react';
import { useState } from 'react';

// Component Material UI
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';

// Icon Material UI
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { AccountCircle, ChevronLeft, ChevronRight, ExpandLess, ExpandMore } from '@mui/icons-material';

// Custom Styles Material UI
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom component
import { themeOv } from '../layout/theme';

interface HeaderProps {
  onDrawerToggle: () => void;
  drawerOpen: boolean;
}
const headerTheme = createTheme({
  mixins: {
    toolbar: {
      minHeight: 72,
    },
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#283c57',
      dark: '#006db3',
    },
  },
});

export default function Header(props: HeaderProps) {
  const { onDrawerToggle, drawerOpen } = props;
  const isSmUp = useMediaQuery(themeOv.breakpoints.up('sm'));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar position={ isSmUp ? "sticky" : "fixed"} elevation={2} sx={{ boxShadow : isSmUp ? 2 : '0px -1px 1px -2px rgb(0 0 0 / 20%), 0px -2px 2px 0px rgb(0 0 0 / 14%), 0px -3px 5px 0px rgb(0 0 0 / 12%)', backgroundColor: '#ffffff', top : 'auto', bottom : drawerOpen ? 100 : 0 }}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { xs: 'block' } }} item>
              <IconButton color="inherit" aria-label="open drawer" onClick={onDrawerToggle} edge="start">
                {drawerOpen ? 
                  isSmUp ? <ChevronLeft sx={{ color: '#101F33' }}/> :  <ExpandMore sx={{ color: '#101F33' }}/> 
                  :  isSmUp ? <ChevronRight sx={{ color: '#101F33' }} /> :  <ExpandLess sx={{ color: '#101F33' }}/>}
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <IconButton
                color="inherit"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <AccountCircle color="primary" sx={{ width: 26, height: 26, fontSize: 14 }} />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem sx={{ width: '12rem' }} onClick={handleClose}>
                  <ListItemIcon>
                    <PermIdentityIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem sx={{ width: '12rem' }} onClick={handleClose}>
                  <ListItemIcon>
                    <SettingsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Setting</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem sx={{ width: '12rem', color: '#f77f7f' }}>
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" sx={{ color: '#f77f7f' }} />
                    </ListItemIcon>
                  <a href="/login" style={{textDecoration:'none'}}>
                  <ListItemText>Logout</ListItemText>
                  </a>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
