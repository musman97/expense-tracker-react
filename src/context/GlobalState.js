import React, { createContext, useReducer } from "react";
import {
    createAddTransaction,
    createDeleteTransaction,
} from "./actionCreators";
import reducer from "./reducer";

const initialState = {
    transactions: [],
};

const GlobalContext = createContext(initialState);

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const addTransaction = (transaction) => {
        dispatch(createAddTransaction(transaction));
    };
    const deleteTransaction = (id) => {
        dispatch(createDeleteTransaction(id));
    };

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                addTransaction,
                deleteTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext as default, ContextProvider };
