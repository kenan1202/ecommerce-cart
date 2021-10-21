import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, Typography } from '@material-ui/core'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addItemToCart } from '../redux/actions/cartActions';
import { getProduct as getProductDetail} from '../redux/actions/productActions';
import Loading from '../components/Loading';

const useStyles = makeStyles((theme) => ({
    product: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    productInfo: {
        marginLeft: 10,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        }
    },
    productText: {
        borderBottom: '1px solid grey',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 10
    },
    productDesc: {
        paddingLeft: 10
    },
    productCart: {
        marginLeft: 10,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        }
    },
    productCartText: {
        height: 60,
        borderBottom: '1px solid grey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    productCartButton: {
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    cartSelect: {
        width: 90,
        textAlign: 'center'
    },
    items: {
        marginBottom: 30
    },
    productImage: {
        marginLeft: 10,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            width: 250,
        }
    },
}))

const ProductScreen = ({match}) => {
    const getProduct = useSelector(state => state.getProduct);
    const carts = useSelector(state => state.carts);
    const dispatch = useDispatch();
    const history = useHistory();
    const [quantity, setQuantity] = useState(1);
    const [disableBtn, setDisableBtn] = useState(false);
    const [stock, setStock] = useState('');

    const { product, loading } = getProduct;

    const { id } = useParams(match);
    const classes = useStyles();

    useEffect(() => {
        dispatch(getProductDetail(id));
    }, [dispatch, id]);

    const handleChange = (e) => {
        setQuantity(+e.target.value);
    }
    
    //Set quantities of items in cart
    const menuItems = [];

    for(let el = 1; el <= product.countInStock; el++) {
        menuItems.push(<MenuItem key = {el} value={el}>{el}</MenuItem>);
    };

    //Disable button
    
    const addToCart = () => {
        dispatch(addItemToCart({product, quantity}));
        history.push('/cart');
    }

    useEffect(() => {
        const cartItem = carts.find(el => el.product._id === product._id);
        
        console.log(carts);


        if(cartItem) {
            setDisableBtn(true);
            setStock('In Stock');
        }
        else {
            setDisableBtn(false);
            setStock('Not In Stock');
        }
    }, [carts, product._id]);


    return (
        <>
            {loading ? <Loading></Loading> : (
            <Grid container className = {classes.product}>
                <Grid item md = {3} sm = {4} xs = {10} className = {classes.items}>
                    <img src = {product.imageUrl} className = {classes.productImage} alt = {product.description} width = '300' height = '350'></img>     
                </Grid>
                <Grid item md = {4} sm = {10} xs = {10} className = {classes.items}>
                    <Paper elevation = {3} className = {classes.productInfo}>
                        <div className = {classes.productText}>
                            <Typography variant = 'h5'>{product.name}</Typography>
                        </div>
                        <div className = {classes.productText}>
                            <Typography variant = 'body1'>Price</Typography>
                        </div>
                        <div className = {classes.productDesc}>
                            <Typography variant = 'body1'>{product.description}</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item md = {3} sm = {10} xs = {10} className = {classes.items}>
                    <Paper elevation = {3} className = {classes.productCart}>
                        <div className = {classes.productCartText}>
                            <Typography variant = 'body1'>Price</Typography>
                            <Typography variant = 'body1'>$400</Typography>
                        </div>
                        <div className = {classes.productCartText}>
                            <Typography variant = 'body1'>Status</Typography>
                            <Typography variant = 'body1'>{stock}</Typography>
                        </div>
                        <div className = {classes.productCartText}>
                            <Typography variant = 'body1'>Qty</Typography>
                            <FormControl>
                                <InputLabel id="demo-simple-select-autowidth-label">Quantity</InputLabel>
                                <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                className = {classes.cartSelect}
                                value={quantity}
                                onChange={handleChange}
                                autoWidth
                                label="Quantity"
                                >
                                    {menuItems}
                                </Select>
                            </FormControl>
                        </div>
                        <div className = {classes.productCartButton}>
                            <Button disabled = {disableBtn} onClick = {() => addToCart()} variant = 'contained' color = 'secondary'>Add To Cart</Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            )}
        </>
    )
}

export default ProductScreen
