import {
    PLANTFORM_MODAL_OPEN,
} from "./actions";

const initialState = {
    plantFormModalOpen: false,
}; 

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case PLANTFORM_MODAL_OPEN:
            return{
                ...state,
                plantFormModalOpen: !initialState.plantFormModalOpen,
            };
    
        default:
            return state;
    }
};