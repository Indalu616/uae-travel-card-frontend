import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Sidebar, { SIDEBAR_WIDTH } from './Sidebar';
import Navbar from './Navbar';

/**
 * Root application layout:
 *  - Fixed sidebar on desktop (≥ md breakpoint)
 *  - Temporary drawer on mobile (< md)
 *  - Sticky top navbar
 *  - Scrollable content area
 */
export default function MainLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* ── Sidebar: permanent on desktop, drawer on mobile ── */}
      {isMobile ? (
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{ sx: { width: SIDEBAR_WIDTH, border: 'none' } }}
          ModalProps={{ keepMounted: true }}
        >
          <Sidebar />
        </Drawer>
      ) : (
        <Sidebar />
      )}

      {/* ── Main content column ── */}
      <Box
        component="main"
        sx={{
          flex: 1,
          ml: isMobile ? 0 : `${SIDEBAR_WIDTH}px`,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {/* Top navbar */}
        <Navbar
          isMobile={isMobile}
          onMenuClick={() => setDrawerOpen(true)}
        />

        {/* Page content — pushed below the 72px AppBar */}
        <Box
          sx={{
            mt: '72px',        // height of the AppBar
            flex: 1,
            p: { xs: 2, sm: 3 },
            maxWidth: 1200,
            width: '100%',
            mx: 'auto',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
