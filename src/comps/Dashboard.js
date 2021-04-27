import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  BrowserRouter as
    Route,
  NavLink,
  Switch,
  useLocation,
  useHistory
} from 'react-router-dom'
import Books from './Books/Books'
import Products from './Product/Products'
import Messeges from './SoldOutProducts/Messeges'
import Users from './Users/Users'
import SoldPro from './SoldPro'
import Exit from '../Auth/Exit'
import Category from './Category'
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import PeopleIcon from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';
import CategoryIcon from '@material-ui/icons/Category';
import CssBaseline from '@material-ui/core/CssBaseline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AdminPage from './AdminData/AdminPage'
import NotFound from './NotFound';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarAuth: {
    display: 'none',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerAuth: {
    display: 'none',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [urlLink] = useState(
    [ 
      '/Buyurtmalar',
      '/Foydalanuvchilar',
      '/Tovarlar',
      '/Tugagan-tovarlar',
      '/Kategoriya', 
      '/personal', 
    ]
  )
  const history = useHistory()

  let location = useLocation()
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openD, setOpenD] = React.useState(false);

  const handleClickOpen = () => {
    setOpenD(true);
  };

  const handleClose = () => {
    setOpenD(false);
  };
  const goAuth = () => {
    setOpenD(false);
    history.push('/')
    history.go()
  }
 
  return (
    <>
      <Dialog
        open={openD}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Rostdan ham chiqmoqchimisiz?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Yo'q
          </Button>
          <Button onClick={goAuth} color="primary">
            Ha
          </Button>
        </DialogActions>
      </Dialog>

      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={
            (location.pathname === '/' || (! urlLink.includes(location.pathname)) ) ?
              classes.appBarAuth :
              clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <div className="app-bar-items">
              <div className="title">
                <h2>Admin</h2>
              </div>
              <div className="items">
                <NavLink to="/Buyurtmalar">
                  <IconButton style={{ color: '#fff' }}>
                    <Badge badgeContent={4} color="secondary">
                      <NotificationsActiveIcon />
                    </Badge>
                  </IconButton>
                </NavLink>
                <NavLink to="/Tugagan-tovarlar">
                  <IconButton style={{ color: '#fff' }}>
                    <AssignmentTurnedInIcon />
                  </IconButton>
                </NavLink>
                <NavLink to="/personal">
                  <IconButton style={{ color: '#fff' }}>
                    <AccountCircleIcon />
                  </IconButton>
                </NavLink>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={
            (location.pathname === '/' || (! urlLink.includes(location.pathname))) ?
              classes.drawerAuth :
              clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {
              [
                'Buyurtmalar',
                'Foydalanuvchilar',
                'Tovarlar',
                'Tugagan-tovarlar',
                'Kategoriya'
              ].map((text, index) => (
                <NavLink to={`${text}`} key={index} >
                  <ListItem button >
                    <ListItemIcon>
                      {
                        index === 0 ? <NotificationsActiveIcon /> :
                          (index === 1 ? <PeopleIcon /> :
                            (index === 2 ? <ShoppingCartIcon /> :
                              (index === 3 ? <AssignmentTurnedInIcon /> :
                                (index === 4 ? <CategoryIcon /> : null)))
                          )
                      }
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </NavLink>
              ))}
          </List>
          <Divider />
          <List>
            {['Sotilgan-tovarlar'].map((text, index) => (
              <NavLink to={`${text}`} key={index} >
                <ListItem button >
                  <ListItemIcon>{index % 2 === 0 ? <LocalOfferIcon /> : <ExitToAppIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </NavLink>
            ))}
          </List>
          <List>
            <ListItem button onClick={handleClickOpen}>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText 
                primary="Chiqish" 
                style={{color:"#757575"}}
              />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/">
              <Exit/>
            </Route>
            <Route path='/Buyurtmalar'>
              <Books/>
            </Route>
            <Route path='/Foydalanuvchilar'>
              <Users/>
            </Route>
            <Route path='/Tovarlar'>
              <Products/>
            </Route>
            <Route path='/Tugagan-tovarlar'>
              <Messeges/>
            </Route>
            <Route path='/Sotilgan-tovarlar'>
              <SoldPro/>
            </Route>
            <Route path='/Kategoriya'>
              <Category/>
            </Route>
            <Route path='/personal'>
              <AdminPage/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
}