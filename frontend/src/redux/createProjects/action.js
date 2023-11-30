import { CREATE_PROJECTS, GET_PROJECTS, PROJECT_FAILURE, PROJECT_REQUEST } from "./actionTypes"
import axios from 'axios';

export const createProjects = (payload) => (dispatch) => {
  dispatch({type:PROJECT_REQUEST})
  axios.post('https://zura-ventures-backend.onrender.com/project/create',payload).then((res)=>{
    console.log(res)
    dispatch({type:CREATE_PROJECTS})
  }).catch((err)=>{
    console.log(err)
    dispatch({type:PROJECT_FAILURE});
  })
}

export const getallProjects = () => (dispatch) => {
    dispatch({type:PROJECT_REQUEST})
  axios.get('https://zura-ventures-backend.onrender.com/project').then((res)=>{
    console.log(res)
    dispatch({type:GET_PROJECTS,payload:res.data})
  }).catch((err)=>{
    console.log(err)
    dispatch({type:PROJECT_FAILURE});
  })
}