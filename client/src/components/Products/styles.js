import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        marginTop: '90px',
        
    },
    root: {
        flexGrow: 1,
    },
    buttons: {
        height: '30px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: '20px',
    },
    sortBtns: {
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        marginLeft: '10px'
    },
    sort: {
        fontSize: '2rem',
        padding: 0,
    }
}))