import React, {useState} from 'react';
import {AppBar,  Grid, IconButton, makeStyles, TextField, Toolbar} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
    root: {
        background: '#d1e0ed',
        boxShadow: 'none',
        padding: '0',
        position: 'sticky',
        top: '0',
        zIndex: '1300',
    },
    input: {
        '& .MuiOutlinedInput-root' : {
            borderRadius: '40px',
            background: '#fff'
        },
        '& .MuiOutlinedInput-input' :{
            padding: '6.5px 14px',
        }
    },
    iconSearch: {
        position: 'absolute',
        right: '15px'
    }
}));

const Header = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        search: ''
    })
    const changeHandler = ({target: {value, name}}) =>
        setState(prevState => ({...prevState, [name]: value}))

    return (
        <AppBar position="static" classes={{
            root: classes.root
        }}>
            <Toolbar style={{padding: '0 18px'}}>
                <Grid container spacing={1}>
                    <Grid item xs={2} sm={1}>
                    </Grid>
                    <Grid item xs={10}  sm={10} md={5} style={{display: 'flex', alignItems: 'center',
                        position: 'relative'}}>
                        <TextField
                            classes={{
                                root: classes.input
                            }}
                            fullWidth
                            id="search"
                            name="search"
                            variant="outlined"
                            value={state.search}
                            onChange={changeHandler}
                        />
                        <IconButton size="small" className={classes.iconSearch}>
                            <SearchIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;