import React, {useEffect} from 'react';
import Header from "../component/Header";
import {Avatar, Drawer, ListItem, ListItemText, makeStyles, Toolbar} from "@material-ui/core";
import {navigations} from "../navigations";
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import logo from '../assets/logo.png';


const drawerWidth = 75
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: '1350',
        whiteSpace: 'nowrap',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    paper: {
        width: drawerWidth,
        background: '#002137',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        '& .MuiTypography-body1': {
            fontSize: '10px'
        }
    },
    icon: {
        height: '30px',
        objectFit: 'contain',
        color: '#fff'
    },
    logo: {
        padding: '10px 20px 20px '
    }
}));
const MainLayout = ({children}) => {
    const classes = useStyles();
    const router = useHistory()

    const redirectTo = url => {
        router.push(url)
    }
    return (
        <div>
            <Header/>
            <div className={classes.root}>
                <Drawer
                    variant="permanent"
                    className={classes.drawer}
                    classes={{
                        paper: classes.paper
                    }}
                >
                    <Avatar variant="square" src={logo} className={classes.logo}/>
                    {navigations.map(nav => {
                        return <ListItem button key={nav.path} className={classes.item}
                                         onClick={() => redirectTo(nav.path)}>
                            <Avatar variant="square" src={nav.icon}
                                    classes={{img: classes.icon}}
                            />
                            <ListItemText primary={nav.name} style={{fontSize: '10px!important'}}/>
                        </ListItem>
                    })}
                </Drawer>
                <main className={classes.content}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;