import axios from 'axios';

import * as types from './actionTypes';
const BASE_URL = 'http://localhost:3000/api/v1';


export function getTasks(){
    let URL = BASE_URL+'/tasks';
    const request = axios.get(URL);
    console.log('Action creator for '+types.GET_TASKS);
    return{type:types.GET_TASKS,payload:request};
}

export function postTask(text){
    let URL = BASE_URL+'/tasks';
    const request = axios.post(URL,{"text":text});
    console.log('Action creator for '+types.POST_TASK);
    return{type:types.POST_TASK,payload:request};
}

export function loadMyHome(){
    let text = {appName:"TASK APP"}
    console.log('Action creator for '+types.LOAD_HOME);
    return{type:types.LOAD_HOME,payload:text};
}