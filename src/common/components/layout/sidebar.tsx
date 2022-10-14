import * as React from 'react';

// Component Material UI
import Divider from '@mui/material/Divider';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';

// Icon Material UI
import BarChartIcon from '@mui/icons-material/BarChart';
import SummarizeIcon from '@mui/icons-material/Summarize';

// Custom Styles Material UI
import { createTheme, CSSObject, styled, Theme, ThemeProvider } from '@mui/material/styles';

// Custom Component
import { themeOv } from '../layout/theme';

// Misc Library
import { Link, useLocation } from 'react-router-dom';

// Menu for sidebar
const categories = [
  {
    id: 'Dashboard',
    icon: <BarChartIcon />,
    active: true,
    path: '/',
  },
  {
    id: 'Summary',
    icon: <SummarizeIcon/>,
    active : false,
    path : '/summary'
  }
];

// Style for list item in sidebar
const item = {
  py: '10px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};
const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

// Custom theme
const themeToolbar = createTheme({
  mixins: {
    toolbar: {
      minHeight: 72,
    },
  },
});
const drawerWidth = 240;

const openedMixin = (mixinTheme: Theme, anchor: any): CSSObject => ({
  width: anchor === "bottom" ? 'auto' : drawerWidth,
  transition: mixinTheme.transitions.create('width', {
    easing: mixinTheme.transitions.easing.sharp,
    duration: mixinTheme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (mixinClTheme: Theme, anchor: any): CSSObject => ({
  transition: mixinClTheme.transitions.create('width', {
    easing: mixinClTheme.transitions.easing.sharp,
    duration: mixinClTheme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: anchor === "bottom" ? 0 : `calc(${mixinClTheme.spacing(7)} + 1px)`,
  [mixinClTheme.breakpoints.up('sm')]: {
    width: anchor === "bottom" ? 0 : `calc(${mixinClTheme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open, anchor }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme, anchor),
    '& .MuiDrawer-paper': openedMixin(theme, anchor),
  }),
  ...(!open && {
    ...closedMixin(theme, anchor),
    '& .MuiDrawer-paper': closedMixin(theme, anchor),
  }),
}));

const Sidebar = (props: DrawerProps) => {
  const { open, ...other } = props;

  const location = useLocation();
  const isSmUp = useMediaQuery(themeOv.breakpoints.up('sm'));

  return (
    <Drawer {...other} anchor={isSmUp ? "left" : "bottom"} open={open} className="a">
      <List disablePadding className="b">
        <ThemeProvider theme={themeToolbar}>
          {isSmUp ? 
            <ListItem
              sx={{
                ...item,
                ...itemCategory,
                display: 'flex',
                fontSize: 22,
                color: '#fff',
                height: 72,
                pt: 2,
                pb: 2,
                pl: 2,
                pr: open ? 2 : 0,
              }}
              className="justify-center"
            >
              {/* Put Icon Company Here */}
            </ListItem>
            :""
          }
        </ThemeProvider>
        {categories.map(({ id, path, icon }) => (
          <Box key={id} sx={{ bgcolor: '#101F33'}}>
              <Link to={path} key={id}>
                <ListItem disablePadding>
                    <ListItemButton selected={path === location.pathname} sx={item}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText sx={{ opacity: open ? 1 : 0 }}>{id}</ListItemText>
                    </ListItemButton>
                </ListItem>
              </Link>
            <Divider />
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
