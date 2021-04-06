import React,{useState} from 'react';
import clsx from 'clsx';
import {BrowserRouter as 
  Route,
  NavLink,
  Switch,
  useLocation
} from 'react-router-dom'
import Books from './Books'
import Products from './Products'
import Messeges from './Categories'
import Users from './Users'
import SoldPro from './SoldPro'
import Exit from './Exit'
import ProtectedRoute from './ProtectedRoute'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MessageIcon from '@material-ui/icons/Message';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import AdminPage from './AdminPage';


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
  drawerAuth:{
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
  const [isAuth] = useState(true)

  let location = useLocation()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={
          location.pathname === "/"
            ? classes.appBarAuth
            : clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })
        }
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
              <NavLink to="/Kategoriyalar">
                <IconButton style={{ color: "#fff" }}>
                  <Badge badgeContent={4} color="secondary">
                    <MessageIcon />
                  </Badge>
                </IconButton>
              </NavLink>
              <NavLink to="/Buyurtmalar">
                <IconButton style={{ color: "#fff" }}>
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsActiveIcon />
                  </Badge>
                </IconButton>
              </NavLink>
              <NavLink to="/personal">
                <IconButton style={{ color: "#fff" }}>
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
          location.pathname === "/"
            ? classes.drawerAuth
            : clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })
        }
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Buyurtmalar", "Foydalanuvchilar", "Tovarlar", "Kategoriyalar"].map(
            (text, index) => (
              <NavLink to={`${text}`} key={index}>
                {/* index===0 ? `/` :  */}
                <ListItem button>
                  <ListItemIcon>
                    {index === 0 ? (
                      <NotificationsActiveIcon />
                    ) : index === 1 ? (
                      <PeopleIcon />
                    ) : index === 2 ? (
                      <ShoppingCartIcon />
                    ) : index === 3 ? (
                      <ChatIcon />
                    ) : null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </NavLink>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Sotilgan tovarlar", "Auth"].map((text, index) => (
            <NavLink to={index === 0 ? `${text}` : "/"} key={index}>
              <ListItem button>
                <ListItemIcon>
                  {index % 2 === 0 ? <LocalOfferIcon /> : <ExitToAppIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/">
            <Exit />
          </Route>
          <ProtectedRoute
            path="/Buyurtmalar"
            component={Books}
            isAuth={isAuth}
          />
          <ProtectedRoute
            path="/Foydalanuvchilar"
            component={Users}
            isAuth={isAuth}
          />
          <ProtectedRoute
            path="/Tovarlar"
            component={Products}
            isAuth={isAuth}
          />
          <ProtectedRoute
            path="/Kategoriyalar"
            component={Messeges}
            isAuth={isAuth}
          />
          <ProtectedRoute
            path="/Sotilgan tovarlar"
            component={SoldPro}
            isAuth={isAuth}
          />
          <ProtectedRoute
            path="/personal"
            component={AdminPage}
            isAuth={isAuth}
          />
        </Switch>
      </main>
    </div>
  );
}