import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrange
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",     // 字體預設為大寫，none 取消此功能
      fontWeight: 700,
    }
  }
});