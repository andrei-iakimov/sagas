import * as types from './actionTypes';

const intialState = {
    recipies: [],
    error: null,
    loading: false
};

const recipeReducer = (state=intialState, action) =>{
    switch(action.type){
        case types.FETCH_RECIPE_START:
            return {
                ...state,
                loading: true,
            };
        case types.FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                loading: false,
                recipies: action.payload
            };
        case types.FETCH_RECIPE_FAIL:
            return{
                ...state,
                loading: false,
                recipies: action.payload
            }
        default:
            return {
                ...state
            };
    }
};

export default recipeReducer;