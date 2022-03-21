import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {useStyles} from './styles';
const theme = createTheme();

export const Product = ({  bike, onAddToCart }) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.root}>
                <CardMedia style={{backgroundSize: 'contain'}} className={classes.media} image={bike.media.source} title={bike.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {bike.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            ${bike.price.formatted}
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: bike.description }} variant="body2" color="textSecondary" component="p" />
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(bike.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
};