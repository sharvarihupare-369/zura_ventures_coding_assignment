import { CONFIG_ADD_NEW, CONFIG_FAILURE, CONFIG_REQUEST, GET_CONFIG } from "./actionTypes"

const initialState = {
    isLoading : false,
    isError : false,
    isConfigGeneralAdded : false,
    getallGeneralConfigs : [],

}

export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
        case CONFIG_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false,
                  isConfigGeneralAdded : false,
            }
        }
        case CONFIG_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                isConfigGeneralAdded : false,
            }
        }
        case GET_CONFIG : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                getallGeneralConfigs : payload
            }
        }
        case CONFIG_ADD_NEW : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isConfigGeneralAdded : false,
            }
        }
        default : {
           return state
        }
    }
}