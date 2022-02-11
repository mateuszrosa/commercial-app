import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => {
    console.log(theme);
    return {
    root: {
        // maxWidth: 345, original width style
        width: '80%',
        height: '400px',
        marginTop: '100px',
        [theme.breakpoints.up('md')]: {
            width: '30%',
          },

    },
    media: {
        height: '60%',
        // paddingTop: '55%', // 16:9
        backgroundSize: 'contain'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}});