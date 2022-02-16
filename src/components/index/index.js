import * as React from 'react';
import '../../css/sidebar.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Sidebar from '../sidebar/sidebar'
import DatagridPage from '../../Components copy/DatagridPage.jsx'
import { useLocation } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Users from '../Users/Users.jsx';
import Orders from '../Orders/Orders.jsx';





function Index() {
  const { pathname } = useLocation();
  const showComponent = [
    { path: '/product', component: <DatagridPage title='Products' /> },
    { path: '/dashboard', component: <Dashboard title='Products' /> },
    { path: '/', component: <Dashboard title='Products' /> },
    { path: '/users', component: <Users title='Users' /> },
    { path: '/orders', component: <Orders title='Orders' /> },
  ]
  let Component;
  showComponent.forEach(element => {
    if (pathname === element.path) {
      Component = element.component;
    }
  })

  return (

    <Sidebar
      insideBoxContent={Component}
    />

  );
}

export default Index;