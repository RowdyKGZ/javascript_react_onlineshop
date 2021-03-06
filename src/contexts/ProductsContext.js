import React, { useReducer } from "react";
import axios from "axios";
import { API } from "../helpers/constants";

export const productsContext = React.createContext();

const INIT_STATE = {
    products: [],
    paginatedPages: 1,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload.data,
                paginatedPages: Math.ceil(
                    action.payload.headers["x-total-count"] / 4
                ),
            };
        default:
            return state;
    }
};

const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const getProducts = async (history) => {
        const search = new URLSearchParams(history.location.search);
        search.set("_limit", 4);
        history.push(`${history.location.pathname}?${search.toString()}`);

        const res = await axios.get(`${API}/product${window.location.search}`);
        dispatch({
            type: "GET_PRODUCTS",
            payload: res,
        });
    };

    return (
        <productsContext.Provider
            value={{
                products: state.products,
                paginatedPages: state.paginatedPages,
                getProducts,
            }}
        >
            {children}
        </productsContext.Provider>
    );
};
export default ProductContextProvider;
