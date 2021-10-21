import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    product: {
        marginTop: 40,
        marginRight: 20,
        [theme.breakpoints.down('sm')]: {
            marginTop: 40,
            margin: 'auto'
        }
    }
}));

const Product = ({product}) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Grid item xs = {12} sm = {6} md = {4}> 
            <Card className = {classes.product}>
                <CardMedia
                component="img"
                height="140"
                image={product.imageUrl}
                alt={product.description}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description.substring(0, 180)}...
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick = {() => history.push(`/product/${(product._id).toString()}`)} color = 'secondary' style = {{ margin: 'auto', width: '100%' }}>View</Button>
            </CardActions>
            </Card>
        </Grid>
    )
}

export default Product
