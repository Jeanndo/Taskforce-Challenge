import * as type from '../actionTypes/actionTypes';

const initialState = {
    historicalData:{
        message:null,
        loading:false,
        error:null,
        success:false
    }
}

const historicalReducer = (state=initialState,action)=>{

    switch(action.type){
        case type.GET_COUNTRY_HIST__DATA_START:
            return {
                ...state,
                historicalData:{
                    message:null,
                    loading:true,
                    error:null,
                    success:false
                }
            }
        case type.GET_COUNTRY_HIST__DATA_SUCCESS:
            return {
                ...state,
                historicalData:{
                    message:action.payload,
                    loading:false,
                    error:null,
                    success:true
                }
            }
        case type.GET_COUNTRY_HIST__DATA_FAILURE:
            return {
                ...state,
                historicalData:{
                    message:null,
                    loading:false,
                    error:action.payload,
                    success:false
                }
            }
        default:
            return state;
    };

};

export default historicalReducer;