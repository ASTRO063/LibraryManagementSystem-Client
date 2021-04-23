import axios from "axios";
import React,{ useReducer } from "react";

const Login=()=>{
    const initialState=
        {
            logedin:false
        }
        const login=(e)=>{
            e.preventDefault();
            var data = JSON.stringify([
                {
                  
                  "email": e.target.elements.email.value,
                  "password": e.target.elements.password.value,
                }
            ]);
              
              var config = {
                method: 'post',
                url: 'http://localhost:8080/users/login/',
                headers: { 
                  'Content-Type': 'application/json',
                },
                data : data
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                console.log("loged in dude.");

              })
              .catch(function (error) {
                console.log(error);
              });
              
            
        }





    return(
        <div>
            <form onSubmit={login}>
                <label>UserName:
                    <input type="text" name="email"></input>
                </label>
                <br></br>
                <label>Password:
                    <input type="text" name="password"></input>
                </label>
                <br></br>
                <button type="submit">login</button>
            </form>
        </div>
    );
}

export default Login;