import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    marginBottom: '3em',
    [theme.breakpoints.down("md")]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: '1.25em'
    }
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down("md")]: {
      height: '7em'
    },
    [theme.breakpoints.down("xs")]: {
      height: '5.5em'
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"  // 當滑鼠移到 logo 時，不會看到有灰色透明的 hover 底色
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    fontSize: "1rem",
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  },
  drawer: {
    // drawer的背景色 (藍色)
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white"
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  }
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  // https://material-ui.com/components/drawers/#swipeable
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  // https://material-ui.com/customization/breakpoints/#theme-breakpoints-down-key-media-query
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }
  
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  }

  const menuOptions = [
    {name: "Services", link: "/services"},
    {name: "Custom Software Development", link: "/customsoftware"},
    {name: "Mobile App Development", link: "/mobileapps"},
    {name: "Website Development", link: "/websites"},
  ]

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if(value !== 0) {
          setValue(0);
        }
        break;
      case "/services":
        if(value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if(value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if(value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if(value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        console.log("in revolution")
        if(value !== 2) {
          setValue(2);
        }
        break;
      case "/about":
        if(value !== 3) {
          setValue(3);
        }
        break;
      case "/contact":
        if(value !== 4) {
          setValue(4);
        }
        break;
      case "/estimate":
        if(value !== 5) {
          setValue(5);
        }
        break;
      default:
        break;
    }

  }, [value]);

  // 當 windows size 大於 'md' 時，會顯示 Tabs 內容
  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab className={classes.tab} component={Link} to={"/"} label="Home"/>
        <Tab 
          className={classes.tab}
          component={Link}
          to={"/services"}
          label="Services"
          // aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-controls="simple-menu"
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={ event => handleClick(event)}
        />
        <Tab className={classes.tab} component={Link} to={"/revolution"} label="The Revolution"/>
        <Tab className={classes.tab} component={Link} to={"/about"} label="About Us"/>
        <Tab className={classes.tab} component={Link} to={"/contact"} label="Contact Us"/>
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        classes={{paper: classes.menu}}
        onClose={handleClose}
        MenuListProps={{onMouseLeave: handleClose}}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option}
            onClick={(event) => {handleMenuItemClick(event, i); setValue(1); handleClose()}}
            classes={{root: classes.menuItem}}
            component={Link}
            to={option.link}
            selected={i === selectedIndex && value === 1
          }>
            {option.name}
          </MenuItem>  
        ))}
      </Menu>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{paper: classes.drawer}}
      >
        <List disablePadding>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/">
            <ListItemText className={classes.drawerItem} disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/services">
            <ListItemText className={classes.drawerItem} disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/revolution">
            <ListItemText className={classes.drawerItem} disableTypography>The Revolution</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/about">
            <ListItemText className={classes.drawerItem} disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to="/contact">
            <ListItemText className={classes.drawerItem} disableTypography>Contact Us</ListItemText>
          </ListItem>
          <ListItem className={classes.drawerItemEstimate} onClick={() => setOpenDrawer(false)} divider button component={Link} to="/estimate">
            <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton 
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <ToolBar disableGutters>
            <Button 
              component={Link}
              to="/"
              disableRipple
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            {/* https://material-ui.com/components/use-media-query/#using-material-uis-breakpoint-helpers */}
            {matches ? drawer : tabs}
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin}/>
    </React.Fragment>
  );
}

export default Header;
