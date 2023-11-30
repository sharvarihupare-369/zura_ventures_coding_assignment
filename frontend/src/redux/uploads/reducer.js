import { CREATE_PROJECTS, CREATE_PROJECT_UPLOADS, GET_PROJECTS, GET_PROJECT_UPLOADS, PROJECT_FAILURE, PROJECT_REQUEST, PROJECT_UPLOAD_FAILURE, PROJECT_UPLOAD_REQUEST } from "./actionTypes"

const initialState = {
    isLoading : false,
    isError : false,
    isUploaded : false,
    alluploads : [],
}

export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
        case PROJECT_UPLOAD_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false,
                isUploaded : false
            }
        }
        case PROJECT_UPLOAD_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                isUploaded : false
            }
        }
        case GET_PROJECT_UPLOADS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                alluploads : payload
            }
        }
        case CREATE_PROJECT_UPLOADS : {
            return {
                ...state,
                isLoading : false,
                isError : false,
                isUploaded : true
            }
        }
        default : {
           return state
        }
    }
}