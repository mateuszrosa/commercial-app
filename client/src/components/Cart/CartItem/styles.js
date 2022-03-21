import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    media: {
        height: 210,
        backgroundSize: 'contain'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    cardAction: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    }
}))