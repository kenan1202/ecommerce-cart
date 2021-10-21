import { NativeSelect, Paper, Typography, makeStyles, Button} from "@material-ui/core"
import Delete from '@material-ui/icons/Delete'
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../redux/actions/cartActions";
import { useState, useEffect } from "react";
import { changeQuantity } from "../redux/actions/cartActions";


const useStyles = makeStyles((theme) => ({
    cartItem: {
        width: 700,
        marginLeft: 180, 
        marginBottom: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            margin: 'auto',
            marginBottom: 30,
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: 30,
            flexDirection: 'column',
            width: 300,
            margin: 'auto'
        }
    },

    cartItemImg: {
        width: 100,
        height: 100,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 180 
        }
    },
    addItemBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 250,
        [theme.breakpoints.down('sm')]: {
            marginTop: 10
        }
    },
    cartItemText: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 25,
            marginTop: 10
        }
    },
    cartItemBtn: {
        [theme.breakpoints.down('sm')]: {
            width: 80,
            height: 40
        }
    },
    cartItemPrice: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 20
        }
    },
    cartItemSelect: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 20
        }
    }
}));

const CartItem = ({cart}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(cart.quantity);

    const cartItemQuantities = [];
    for(let i = 1; i <= cart.product.countInStock; i++) {
        cartItemQuantities.push(<option value = {i}>{i}</option>)
    }

    const removeFromCart = () => {
        dispatch(removeItemFromCart(cart.product));
    }

    useEffect(() => {
        dispatch(changeQuantity({product: cart.product, quantity}));
    }, [quantity, cart.product, dispatch]);



    return (
        <Paper className = {classes.cartItem}>
            <img 
            src = {cart.product.imageUrl}
            className = {classes.cartItemImg}
            alt = {cart.product.name}
            ></img> 

            <Typography variant = 'body1' className = {classes.cartItemText}>{cart.product.name}</Typography>

            <div className = {classes.addItemBox}>
                <Typography variant = 'body1' className = {classes.cartItemPrice}>{cart.product.price}</Typography>
                <NativeSelect
                className = {classes.cartItemSelect}
                defaultValue={quantity}
                onChange = {(e) => setQuantity(+e.target.value)}
                >
                    {cartItemQuantities}
                </NativeSelect>
                <Button className = {classes.cartItemBtn} onClick = {() => removeFromCart()} color = 'secondary' variant = 'outlined'>
                    <Delete></Delete>
                </Button>
            </div>
        </Paper>
    )
}

export default CartItem
