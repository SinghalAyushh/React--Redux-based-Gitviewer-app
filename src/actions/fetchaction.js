import store from '../store'
import * as actionTypes from "./actionTypes";

export const fetch_user =()=>{
    return{
      type : actionTypes.FETCH_USER
    };
};
export const receive_user = Post=>{
    return{
 type :actionTypes.REC_USER,
 data: Post
    };
};
export const receive_error =()=>{
    return{
 type : actionTypes.ERROR

};
};

export const thunk_fetch = username =>{
 const user = username.replace(/\s/g, "");
 store.dispatch(fetch_user());
 return function(dispatch, getState) {
   return fetch(`https://api.github.com/users/${user}`)
     .then(data => data.json())
     .then(data => {
       if (data.message === "Not Found") {
         throw new Error("No such user found!!");
       } else dispatch(receive_user(data));
     })
     .catch(err => dispatch(receive_error()));
 };
};