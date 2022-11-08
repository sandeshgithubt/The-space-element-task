import FacebookLogin from 'react-facebook-login';
import { GoogleLogout } from "react-google-login";
import React,{ useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";

import "./home.css";
import { googleApiKey } from "../components/constant";


const Home = () => {
const navigate = useNavigate();


    const onSuccess = (res) => {
        console.log(res)
        localStorage.removeItem("auth");
        navigate("/");
        console.log('Logout made successfully');
        
    }
    const onLogout =  () =>{
      localStorage.removeItem("auth");
      navigate("/");
      console.log('Logout made successfully');
    }
    
    useEffect(()=>{
       if(!localStorage.getItem('auth')){
         navigate("/")
       }
    },[]);
    return ( 
        <>
        <div className="nav-bar">
            <h1><i>Home</i></h1>
            <div class="right-container">
            <input type="text" class="search-box" placeholder="search"/>
                   
             {/* <GoogleLogout
                clientId={googleApiKey}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
              /> */}
               <button className="sub-btn" onClick={onLogout}>Logout</button> 

             
              

          
            </div>
        </div>


        <div className="blog">
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>

        <center>
         
             <div id="translate"></div>
        </center>
       </>
     );
}
 
export default Home;