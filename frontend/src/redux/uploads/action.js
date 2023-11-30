import { CREATE_PROJECT_UPLOADS,  GET_PROJECT_UPLOADS,  PROJECT_UPLOAD_FAILURE, PROJECT_UPLOAD_REQUEST } from "./actionTypes"
import axios from 'axios';

export const createUpload = (payload) => (dispatch) => {
  dispatch({type:PROJECT_UPLOAD_REQUEST})
  axios.post('https://zura-ventures-backend.onrender.com/upload',payload).then((res)=>{
    // console.log(res)
    dispatch({type:CREATE_PROJECT_UPLOADS})
  }).catch((err)=>{
    // console.log(err)
    dispatch({type:PROJECT_UPLOAD_FAILURE});
  })
}

export const getuploads = () => (dispatch) => {
    dispatch({type:PROJECT_UPLOAD_REQUEST})
  axios.get('https://zura-ventures-backend.onrender.com/upload').then((res)=>{
    // console.log(res)
    dispatch({type:GET_PROJECT_UPLOADS,payload:res.data})
  }).catch((err)=>{
    // console.log(err)
    dispatch({type:PROJECT_UPLOAD_FAILURE});
  })
}