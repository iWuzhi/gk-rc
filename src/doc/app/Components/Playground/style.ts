
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  playground: {
    margin: '24px 0 36px 0'
  },
  preview: {
    display: 'flex',
    marginBottom: 24,
    '& > *': {
      marginRight: 24
    }
  },
  editor: {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 8
  },
  operation: {

  }
});