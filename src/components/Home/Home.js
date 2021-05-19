import React from "react";
import { Grid } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Home = () => {
    return (
        <div style={{ padding: "20px" }}>
            <Grid space-md={3} spacing-sm={3}>
                <Sidebar />
                <Content />
            </Grid>
        </div>
    );
};

export default Home;
