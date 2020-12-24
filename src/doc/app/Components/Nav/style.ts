
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  nav: {
    height: '100%',
    borderRight: 'solid 1px rgba(0, 0, 0, 0.12)',
    width: '320px',
    '& button': {
      maxWidth: 320,
      paddingLeft: 24,
      '& > span': {
        alignItems: 'flex-start',
        textTransform: 'none'
      },
      '&.Mui-selected': {
        backgroundColor: '#e0e0e0'
      }
    },
  },
});