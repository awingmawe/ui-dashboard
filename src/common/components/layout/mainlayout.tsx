import { useState } from 'react';

// Material UI Component
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';


// Custom Component
import Sidebar from './sidebar';
import Header from "./navbar"
import { themeOv } from './theme';
import Login from "../../../pages/login"

// Misc Library
import { Outlet } from 'react-router-dom';

export default function HomeDashboard() {
    const [drawerOpened, setDrawerOpened] = useState(true);

    const handleDrawerToggle = () => {
        setDrawerOpened(!drawerOpened);
    };
    return (
        <>
            <ThemeProvider theme={themeOv}>
                <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                    <CssBaseline />
                    <Sidebar variant="permanent" open={drawerOpened} sx={{ display: { sm: 'block' } }} />
                    <Box component="main" sx={{ flexGrow: 1 }}>
                        <Header drawerOpen={drawerOpened} onDrawerToggle={handleDrawerToggle} />
                        <Box sx={{ py: 3, px: 4, bgcolor: '#eaeff1' }}>
                            <Outlet />
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}
