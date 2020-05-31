import axios from "axios"; 

export const FETCHING_PLANT_START = "FETCHING_PLANT_START";
export const FETCHING_PLANT_SUCCESS = "FETCHING_PLANT_SUCCESS";
export const FETCHING_PLANT_FAILURE = "FETCHING_PLANT_FAILURE";
export const ADD_PLANT_START = "ADD_PLANT_START";
export const ADD_PLANT_SUCCESS = "ADD_PLANT_SUCCESS";
export const ADD_PLANT_FAILURE = "ADD_SMURF_FAILURE"; 

export const getPlant = () => dispatch => {
    dispatch({type: FETCHING_PLANT_START});

    axios 
    .get("/plants")
    .then(res => {
        console.log("res", res);
        dispatch({type: FETCHING_PLANT_SUCCESS, payload: res.data});
    })
    .catch(err => {
        console.log("err", err);
    });
};

export const addPlant = (plant) => dispatch => {
    dispatch({type: ADD_PLANT_START});

    axios
        .post("/plants", plant)
        .then(res => {
            console.log("addPlant", res)
            dispatch({type: ADD_PLANT_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log("addPlant", err)
        });
};