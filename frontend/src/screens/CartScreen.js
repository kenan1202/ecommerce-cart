import { Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    cart: {
        marginTop: 100,
    },
    totalItemBox: {
        marginLeft: 50,
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        },
        [theme.breakpoints.up('xs')]: {
            marginLeft: 0,
        },
    },
    totalItem: {
        [theme.breakpoints.up('xs')]: {
            fontSize: 22
        }
    },
    totalItemPrice: {
        [theme.breakpoints.up('xs')]: {
            fontSize: 22
        }
    },
    cartItemBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 'auto'
    },
    totalItemGrid: {
        [theme.breakpoints.down('sm')]: {
            margin: 'auto'
        }
    },
}));


const CartScreen = () => {
    const classes = useStyles();
    const carts = useSelector(state => state.carts);

    const totalItem = carts.reduce((acc, cur) => acc + cur.quantity, 0);
    const totalPrice = carts.reduce((acc, cur) => acc + (cur.product.price * cur.quantity), 0);

    return (
        <Container className = {classes.cart}>
            <Typography variant = 'h4' style = {{ textAlign: 'center', margin: 'auto' }}>Shopping Cart</Typography>
            <Grid container style = {{ marginTop: 10 }}>
                <Grid item md = {8} sm = {10} xs = {10} className = {classes.cartItemBox}>
                    {carts.map((cart) => (
                            <CartItem key = {cart.product.name} cart = {cart}></CartItem>
                    ))}
                </Grid>

                <Grid item md = {3} sm = {10} xs = {10} className = {classes.totalItemGrid}>
                    <Paper className = {classes.totalItemBox} elevation = {3}>
                        <div>
                            <Typography variant = 'h5' className = {classes.totalItem}>Total {totalItem} Items</Typography>
                            <Typography variant = 'body1' className = {classes.totalItemPrice}>${totalPrice.toFixed(2)}</Typography>
                        </div>
                        <Button variant = 'contained' color = 'primary'>Proceed To Checkout</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CartScreen
