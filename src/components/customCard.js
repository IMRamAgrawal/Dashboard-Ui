import React from 'react';
import { Card, List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TargetIcon from '@mui/icons-material/GpsFixed';
import BurgerIcon from '@mui/icons-material/Fastfood';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { styled } from '@mui/system';

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  backgroundColor: '#44454b',
}));

const data = [
  { icon: <TargetIcon />, color: '#FF6F61', text: 'Goals' },
  { icon: <BurgerIcon />, color: '#6A1B9A', text: 'Popular Dishes' },
  { icon: <MenuBookIcon />, color: '#00838F', text: 'Menus' },
];

const CustomCard = () => {
  return (
    <Card sx={{ backgroundColor: '#1E1E2F', color: 'white', padding: '20px', borderRadius: '10px' }}>
      <List>
        {data.map((item, index) => (
          <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <ListItemAvatar>
              <CustomAvatar sx={{ backgroundColor: item.color }}>
                {item.icon}
              </CustomAvatar>
            </ListItemAvatar>
            <ListItemText primary={item.text} primaryTypographyProps={{ color: 'white', fontWeight: 'bold' }} />
            <IconButton edge="end">
              <ChevronRightIcon sx={{ color: 'white' }} />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default CustomCard;
