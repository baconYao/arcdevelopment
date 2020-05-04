import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    // zIndex 和 position 同時設置，可以讓 sidebar 不會壓到 footer
    zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "25em",    // 在這裡控制高度？
    verticalAlign: "bottom",    // 不讓 footer 底部有空隙
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img
        alt="black decorative slash"
        src={footerAdornment} 
        className={classes.adornment}
      />
    </footer>
  )
}
