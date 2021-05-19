import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        backgroundSize: "contain",
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
}));

export default function ProductCard({ item }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title={item.title} subheader={item.type} />
            <CardMedia
                className={classes.media}
                image={item.image}
                title="Paella dish"
                subheader={item.type}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                </Typography>
            </CardContent>

            <CardContent>
                <Typography variant="h5" color="primary">
                    {item.price}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
