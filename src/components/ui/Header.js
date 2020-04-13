import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em'
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    fontSize: "1rem",
    minWidth: 10,
    marginLeft: "25px"
  }
}));

function Header(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <ToolBar disableGutters>
            <img alt="company logo" className={classes.logo} src={logo} />
            <Tabs className={classes.tabContainer} >
              <Tab className={classes.tab} label="Home"/>
              <Tab className={classes.tab} label="Services"/>
              <Tab className={classes.tab} label="The Revolution"/>
              <Tab className={classes.tab} label="About Us"/>
              <Tab className={classes.tab} label="Contact Us"/>
            </Tabs>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin}/>
    </React.Fragment>
  );
}

export default Header;
