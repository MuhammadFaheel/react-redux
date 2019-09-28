import {USER_LOGIN, GET_VALUE} from './Type'
export const UserLogin = (username,userpassword) => dispatch => {
    const Name = username;
    const Password = userpassword;
    localStorage.setItem("auth",{Name :Name,Password : Password});
    dispatch({
        type : USER_LOGIN,
        payload : {Name : Name, Password : Password}
    })
}
export const Getvalue=()=>dispatch=>{
    const Name = localStorage.getItem("auth").Name
    const Password = localStorage.getItem("auth").Password
    dispatch({
        type : GET_VALUE,
        payload : {Name,Password}
    })
}