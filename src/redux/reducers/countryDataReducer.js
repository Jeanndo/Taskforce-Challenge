import * as type from '../actionTypes/actionTypes';

const initialState={

    countryData:{
    message:null,
    loading:false,
    error:null,
    success:false
    }
}

const countryDataReducer = (state=initialState,action)=>{

    switch(action.type){
        case type.GET_COUNTRY_DATA_START:
            return {
                ...state,
                countryData:{
                    message:null,
                    loading:true,
                    error:null,
                    success:false
                    }
            }
        case type.GET_COUNTRY_DATA_SUCCESS:
            return {
                ...state,
                countryData:{
                    message:action.payload,
                    loading:false,
                    error:null,
                    success:true
                    }
            }
        case type.GET_COUNTRY_DATA_FAILURE:
            return {
                ...state,
                countryData:{
                    message:null,
                    loading:false,
                    error:action.payload,
                    success:false
                    }
            }

        default:
            return state
    }

}
export default countryDataReducer