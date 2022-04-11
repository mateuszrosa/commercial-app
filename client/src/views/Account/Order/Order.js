import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';

import useStyles from './styles.js';

export const Order = ({product}) => {

    console.log(product)
    
    const classes = useStyles();

    return ( 
        <Card>
            <CardMedia style={{backgroundSize: 'contain'}} image={product.media.source} title={product.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="h6">{product.line_total.formatted_with_symbol}</Typography>
            </CardContent>
        </Card>
     );
}