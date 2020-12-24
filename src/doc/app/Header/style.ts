
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  header: {
    position: 'relative',
    zIndex: 10,
    boxShadow: '0 2px 8px #f0f1f2'
  },
  content: {
    height: 64,
    display: 'flex'
  },
  logo: {
    width: 280,
    flexShrink: 0,
    '& h1': {
      margin: 0,
    },
    '& a': {
      height: 64,
      paddingLeft: 40,
      overflow: 'hidden',
      color: 'rgba(0,0,0,.85)',
      fontSize: 18,
      fontFamily: 'Avenir,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      lineHeight: '64px',
      whiteSpace: 'nowrap',
      textDecoration: 'none'
    }
  },
  nav: {
    flexGrow: 2,
    display: 'flex',
    alignItems: 'center'
  },
  menus: {
    '& a': {
      textDecoration: 'none'
    }
  }
});