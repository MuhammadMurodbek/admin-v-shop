import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 700,
    marginLeft:'auto',
    marginRight:'auto'
  },
}));

function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Shaxsiy malumotlar" {...a11yProps(0)} />
          <Tab label="Ma'lumotlarni yangilash" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="tabPage tab-first">
            <div>
              <h3>Role:Administrator</h3>
              <h3>Ism: Abdulhamid</h3>
              <h3>Familiya: Abdulhamid</h3>
              <h3>Login: Abdulhamid</h3>
              <h3>Parol: 12345</h3>
              <h3>Email: rekrjkg@mail.com</h3>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className="tabPage tab-second">
            <TextField id="outlined-basic" label="Ism"/>
            <TextField id="outlined-basic" label="Familiya"/>
            <TextField id="outlined-basic" label="Login"/>
            <TextField id="outlined-basic" label="Parol"/>
            <TextField id="outlined-basic" label="Yangi parol"/>
            <TextField id="outlined-basic" label="Email"/>
            <Button 
              className="btn-tab"
              variant="contained" 
              color="primary"
            >
              O'zgarishlarni saqlash
            </Button>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default withRouter(FullWidthTabs)