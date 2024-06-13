import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider } from '@mui/material';
import { Star as StarIcon, People as PeopleIcon, Send as SendIcon, Menu as MenuIcon } from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#1976d2', color: '#fff' },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon sx={{ color: '#fff' }}>
              {index === 0 ? <MenuIcon /> : index === 1 ? <StarIcon /> : index === 2 ? <PeopleIcon /> : index === 3 ? <SendIcon /> : <MenuIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
