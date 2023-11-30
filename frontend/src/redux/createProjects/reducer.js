import { CREATE_PROJECTS, GET_PROJECTS, PROJECT_FAILURE, PROJECT_REQUEST } from "./actionTypes"

const initialState = {
    projectName : '',
    isLoading : false,
    isError : false,
    isAdded : false,
    allProjects : [],
}

export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
        case PROJECT_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false,
                isAdded : false
            }
        }
        case PROJECT_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                isAdded : false
            }
        }
        case GET_PROJECTS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                allProjects : payload
            }
        }
        case CREATE_PROJECTS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isAdded : true
            }
        }
        default : {
           return state
        }
    }
}