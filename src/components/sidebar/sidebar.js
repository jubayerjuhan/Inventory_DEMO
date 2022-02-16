import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../css/sidebar.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import SettingsIcon from '@material-ui/icons/Settings';
import CalculateIcon from '@mui/icons-material/Calculate';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const drawerWidth = 310;
const icon_list = [
  {
    icon: StoreMallDirectoryIcon,
    text: "Dashboard",
    link: "dashboard"
  },
  {
    icon: SettingsIcon,
    text: "Products",
    link: "product"
  },
  {
    icon: PeopleIcon,
    text: "User",
    link: "users",
  },
  {
    icon: DeliveryDiningIcon,
    text: "Order",
    link: "orders",
  }
];

const card_element = <Card sx={{ minWidth: 280 }}>
  <CardContent>
    <div className="logo-section">
      <div>
        <span className="blueColor">C</span>
        <span className="orengColor">S</span> <span>Coders Computer!</span>
      </div>
    </div>
    <div className="login-div">
      <div className="login-img">
        <img src="img/pic-3.png" alt="" />
      </div>
      <div className="login-text">
        <span className="textWel">Welcome,</span><br />
        <span className="username">Kamran</span>
      </div>
    </div>
  </CardContent>
  {/* <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
</Card>

function Sidebar({ insideBoxContent }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            E-commerce Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        {card_element}
        <Divider />
        <List>
          {icon_list.map((icon_data, index) => (
            <ListItem component={Link} to={"/" + icon_data.link} button key={icon_data.text}>
              <ListItemIcon>
                <icon_data.icon />
              </ListItemIcon>
              <ListItemText primary={icon_data.text} />
            </ListItem>
          ))}
        </List>
        <div className="bar-bottom-item">
          <Divider />
          <i className="fas fa-cog"></i>
          <i className="fas fa-expand-arrows-alt"></i>
          <i className="fas fa-eye-slash"></i>
          <i className="fas fa-power-off"></i>
        </div>
      </Drawer>
      <div style={{ paddingTop: "4rem", width: '100%' }}>
        {/* <DatagridPage /> */}
        {insideBoxContent}
      </div>
    </Box>
  );
}

export default Sidebar;