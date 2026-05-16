import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

// Icons
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import DirectionsTransitRoundedIcon from '@mui/icons-material/DirectionsTransitRounded';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import TrainRoundedIcon from '@mui/icons-material/TrainRounded';

import heroImg from '../assets/hero.png';

export const SIDEBAR_WIDTH = 260;

/** Navigation items */
const NAV_ITEMS = [
  {
    label: 'Dashboard',
    path: '/',
    icon: <DashboardRoundedIcon />,
  },
  {
    label: 'Register Card',
    path: '/register',
    icon: <CreditCardRoundedIcon />,
  },
  {
    label: 'Top Up',
    path: '/topup',
    icon: <AccountBalanceWalletRoundedIcon />,
  },
  {
    label: 'Start Journey',
    path: '/start-journey',
    icon: <DirectionsTransitRoundedIcon />,
  },
  {
    label: 'End Journey',
    path: '/end-journey',
    icon: <FlagRoundedIcon />,
  },
  {
    label: 'Card Details',
    path: '/card-details',
    icon: <SearchRoundedIcon />,
  },
  {
    label: 'Journey History',
    path: '/history',
    icon: <HistoryRoundedIcon />,
  },
];

/**
 * Sidebar navigation panel.
 * Receives `collapsed` prop for future mobile toggle support.
 */
export default function Sidebar({ collapsed = false }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      component="nav"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'background.paper',
        borderRight: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: (theme) => theme.zIndex.drawer,
      }}
    >
      {/* ── Brand / Logo ── */}
      <Box
        sx={{
          px: 2.5,
          py: 2.5,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          minHeight: 72,
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 2,
            overflow: 'hidden',
            flexShrink: 0,
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TrainRoundedIcon sx={{ color: 'primary.contrastText', fontSize: 22 }} />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={700} color="text.primary" lineHeight={1.2}>
            UAE Travel Card
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Management System
          </Typography>
        </Box>
      </Box>

      <Divider />

      {/* ── Navigation ── */}
      <Box sx={{ flex: 1, overflowY: 'auto', py: 1.5 }}>
        <Typography
          variant="caption"
          fontWeight={600}
          color="text.secondary"
          sx={{ px: 2.5, mb: 0.5, display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          Navigation
        </Typography>

        <List dense disablePadding>
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Tooltip key={item.path} title={collapsed ? item.label : ''} placement="right">
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  selected={isActive}
                  sx={{
                    mx: 1,
                    borderRadius: 2,
                    mb: 0.25,
                    '&.Mui-selected': {
                      backgroundColor: 'action.selected',
                      '&:hover': { backgroundColor: 'action.selected' },
                    },
                    '&:hover': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 38,
                      color: isActive ? 'text.primary' : 'text.secondary',
                    }}
                  >
                    {React.cloneElement(item.icon, { fontSize: 'small' })}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? 'text.primary' : 'text.secondary',
                    }}
                  />
                </ListItemButton>
              </Tooltip>
            );
          })}
        </List>
      </Box>

      {/* ── Footer banner using hero.png ── */}
      <Box
        sx={{
          m: 1.5,
          borderRadius: 2,
          overflow: 'hidden',
          height: 120,
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <img
          src={heroImg}
          alt="UAE transit"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: 1.5,
          }}
        >
          <Typography variant="caption" color="white" fontWeight={700} lineHeight={1.3}>
            UAE Transit Network
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.65rem' }}>
            Powered by Smart Card
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
