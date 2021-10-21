import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    titleLarge: {
        display: 'block'
    },
    titleSmall: {
        display: 'none'
    },


    navbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    shopIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0, 0.5)',
        color: '#fff',
        width: 100,
        height: 50,
        borderRadius: 10,
        cursor: 'pointer'
    },
    cartText: {
        marginRight: theme.spacing(1) 
    },
    [theme.breakpoints.down('sm')]: {
        titleLarge: {
            display: 'none'
        },
        titleSmall: {
            display: 'block'
        },
        shopIcon: {
            height: 40
        }
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();
    const carts = useSelector(state => state.carts);
    

    return (
        <AppBar position = 'fixed'>
            <Toolbar className = {classes.navbar}>
                <Typography variant = 'h5' className = {classes.titleLarge} onClick = {() => history.push('/')} style = {{cursor: 'pointer'}}>Mern Shopping Cart</Typography>
                <Typography variant = 'h5' className = {classes.titleSmall} onClick = {() => history.push('/')} style = {{cursor: 'pointer'}}>Shopping Cart</Typography>
                <div className = {classes.shopIcon} onClick = {() => history.push('/cart')}>
                    <Typography variant = 'h6' className = {classes.cartText}>Cart</Typography>
                    <Badge badgeContent={carts.length} color="secondary">
                        <ShoppingCart></ShoppingCart>
                    </Badge>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
