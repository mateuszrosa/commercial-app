import { makeStyles } from '@mui/styles';

export const useStyles =  makeStyles(() => ({
    root: {
        // maxWidth: 345, original width style
        width: '80%',
        height: '400px',
        marginTop: '50px',

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
}));