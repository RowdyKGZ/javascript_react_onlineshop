import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../contexts/ProductsContext";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import ProductCard from "./ProductCard";
import { useHistory } from "react-router-dom";

const ProductList = () => {
    const history = useHistory();
    const { products, getProducts, paginatedPages } =
        useContext(productsContext);
    const [page, setPage] = useState(getPage());

    useEffect(() => {
        getProducts(history);
    }, []);

    function getPage(e, page) {
        const search = new URLSearchParams(history.location.search);
        return search.get("_page");
    }

    const handlePage = (e, pageValue) => {
        const search = new URLSearchParams(history.location.search);
        search.set("_page", pageValue);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getProducts(history);
        setPage(pageValue);
    };

    return (
        <>
            <Grid container spacing={3}>
                {products ? (
                    products.map((item, index) => (
                        <ProductCard item={item} key={index} />
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </Grid>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                }}
            >
                <Pagination
                    count={paginatedPages}
                    color="primary"
                    onChange={handlePage}
                    page={+page}
                />
            </div>
        </>
    );
};

export default ProductList;
