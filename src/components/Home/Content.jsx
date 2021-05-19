import React from "react";
import ProductList from "../Product/ProductList";
import { Grid } from "@material-ui/core";

const Content = () => {
    return (
        <Grid item md={9}>
            <ProductList />
        </Grid>
    );
};

export default Content;
