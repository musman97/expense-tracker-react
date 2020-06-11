import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./actionTypes";

const createAddTransaction = (transaction) => {
    return {
        type: ADD_TRANSACTION,
        payload: transaction,
    };
};

const createDeleteTransaction = (id) => {
    return {
        type: DELETE_TRANSACTION,
        payload: id,
    };
};

export { createAddTransaction, createDeleteTransaction };
