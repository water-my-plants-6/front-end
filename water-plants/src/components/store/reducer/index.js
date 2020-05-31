import {
    FETCHING_PLANT_START,
    FETCHING_PLANT_SUCCESS,
    ADD_PLANT_START,
    ADD_PLANT_SUCCESS,
} from "../action/index";

const initialState = {
    plants:[],
    isFetching: false,
    error: ""
}; 

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_PLANT_START:
            return{
                ...state,
                isFetching: true,
                error: ""
            };
        case FETCHING_PLANT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                plants: action.payload
            };
        case ADD_PLANT_START:
            return{
                ...state,
                isFetching: true,
                error: ""
            };
        case ADD_PLANT_SUCCESS:
            return{
                ...state,
                plants: action.payload,
                isFetching: false
            };
            default:
                return state;
    }
};