import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles (({theme}) => {
    console.log(theme)
return{
    content: {
        flexGrow: 1,
        marginTop: '90px',
        paddingTop: '20px'
        
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
        flexDirection: 'column',
    },
    button: {
        marginLeft: '10px',
    },
    sort: {
        fontSize: '2rem',
        padding: '0',
    }
}})