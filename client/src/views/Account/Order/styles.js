import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    media: {
        minWidth: 250,
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