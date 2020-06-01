import {
    FETCHING_PLANT_START,
    FETCHING_PLANT_SUCCESS,
    FETCHING_PLANT_FAILURE,
    ADD_PLANT_START,
    ADD_PLANT_SUCCESS,
    ADD_PLANT_FAILURE,
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
            };
        case FETCHING_PLANT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                plants: action.payload
            };
        case FETCHING_PLANT_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            };
        case ADD_PLANT_START:
            return{
                ...state,
                isFetching: true,
            };
        case ADD_PLANT_SUCCESS:
            return{
                ...state,
                plants: action.payload,
                isFetching: false
            };
        case ADD_PLANT_FAILURE:
                return{
                    ...state,
                    plants: false,
                    error: action.payload
                };
            default:
                return state;
    }
};