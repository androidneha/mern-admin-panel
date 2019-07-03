import axios from "axios";
import {
    GET_ERRORS,
    USER_ADD,
    USER_UPDATE
} from "./types";

export const addUser = (userData, history) => dispatch => {
    axios
        .post("/api/user-add", userData)
        .then(res =>
            dispatch({
                type: USER_ADD,
                payload: res,
            })
        ).catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};


export const updateUser = (userData) => dispatch => {
    axios
        .post("/api/user-update", userData)
        .then(res =>
            dispatch({
                type: USER_UPDATE,
                payload: res,
            })
        ).catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};
