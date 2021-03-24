import { makeStyles } from '@material-ui/core/styles';
import komitasInsImg from './images/komitas-institut.jpeg';

export default makeStyles((theme) => ({
    header: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
    },
    logo: {
        width: 150,
        height: 150,
        marginRight: 30,
    },
    title: {
        fontSize: 42,
    },
    closeIcon: {
        position: 'absolute !important',
        right: -65,
        top: -65,
        width: 40,
        height: 40,
        backgroundColor: theme.palette.background.paper,
    },
    dialogPaper: {
        overflow: 'visible',
        backgroundColor: 'unset',
    },
    root: {
        width: 1400,
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${komitasInsImg})`,
        backgroundColor: theme.palette.background.paper,
    },
    img: {
        width: 200,
        height: 250,
        objectFit: 'contain',
    },
    card: {
        padding: 0,
        boxShadow: 'none',
        transition: 'shadow .3s linar',
        backgroundColor: theme.palette.background.paper,
        '&:hover': {
            // boxShadow: 'none',
            cursor: 'pointer',
        },
    },
    dialogImageWrapper: {
        position: 'relative',
        minWidth: 600,
        height: 800,
    },
    dialogImageIamge: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    audioWrapper: {
        flexGrow: 1,
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    isClosedImage: {
        opacity: 0,
    },
}));