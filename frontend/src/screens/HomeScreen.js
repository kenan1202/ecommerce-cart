import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import Product from '../components/Product'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {getProducts as listProducts} from "../redux/actions/productActions";


import Loading from '../components/Loading';


const useStyles = makeStyles({
    home: {
        marginTop: 100,
    },
    homeTitle: {
        textAlign: 'center'
    }
})


const HomeScreen = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const {loading, products } = getProducts;


    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]); 


    return (
        <Container className = {classes.home}>
            {loading ? <Loading></Loading> : 
            <>
                <Typography variant = 'h4' className = {classes.homeTitle}>Latest Products</Typography>
                
                <Grid container>
                    {products.map((product) => (
                    <Product key = {product.name} product = {product}></Product>
                    ))}
                </Grid>
            </>
            }
        </Container>
    )
}

export default HomeScreen
