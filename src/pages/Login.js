
import { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import {GoogleLogin} from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { googleApiKey } from '../components/constant';
import './home.css';

const Login = () => {
    const navigate = useNavigate();
    // const [flag, setFlag] = useState = (true);

    const handleLogin = (res) => {
        if(res){
          
            console.log('Login Success: currentUser:', res,res.profileObj);
            if(res && res.profileObj){
                localStorage.setItem("auth",JSON.stringify(res.profileObj))
                navigate("/home");
                window.location.reload();
            }
        }
       
    }
    const componentClicked = ()=>{console.log("sds")}
    const responseFacebook = (res)=> {
        if(res && res.id){
            console.log(res);
            localStorage.setItem("auth",JSON.stringify(res))
                navigate("/home");
                window.location.reload();
        }
    }
    
    const fbContent = (
        <FacebookLogin
                appId="526620655661064"
                autoLoad={false}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
              />
      );
    return ( 
        <>
    <div className="nav-bar">
        <h1><i>LOGIN</i></h1>

        <div class="right-container">
            
            {/* <button className="sub-btn">Sign Up</button> 
            <button className="sub-btn">Sign In</button>   */}

            {/* dummy key: 707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com */}

            {/*my key :  124830515711-lsmqf3fjom225m6acj2osbpurh15fckk.apps.googleusercontent.com */}

            <GoogleLogin
                    clientId={googleApiKey}
                    buttonText="Log in with Google"
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                  
            />

             {/* <ReactFacebookLogin
               appId='1177380133214970'
              /> */}

            {fbContent}
        </div>
    </div>
    
        <div>
           <h1 className='heading'>Welcome To Login page</h1>
        </div>

        <div>
            <h2 className='sub-heading'>Click On Login With Google</h2>
        </div>
        

    </>
        
    );
}
 
export default Login;