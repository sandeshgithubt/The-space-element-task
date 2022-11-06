
import { useState } from 'react';
import {GoogleLogin} from 'react-google-login';
import { useNavigate } from "react-router-dom";
import './home.css';

const Login = () => {
    const navigate = useNavigate();
    // const [flag, setFlag] = useState = (true);

    const handleLogin = (res) => {
        if(res){
            localStorage.setItem("auth",JSON.stringify(res.profileObj))
            console.log('Login Success: currentUser:', res,res.profileObj);
            if(res && res.profileObj){
                navigate("/home");
                window.location.reload();
            }
        }
        // alert(
        //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
    }

    return ( 
        <>
    <div className="nav-bar">
        <h1><i>LOGIN</i></h1>

        <div class="right-container">
            
            {/* <button className="sub-btn">Sign Up</button> 
            <button className="sub-btn">Sign In</button>   */}

            <GoogleLogin
                    clientId={'124830515711-lsmqf3fjom225m6acj2osbpurh15fckk.apps.googleusercontent.com'}
                    buttonText="Log in with Google"
                    onSuccess={handleLogin}
                    onFailure={handleLogin}
                    cookiePolicy={'single_host_origin'}
            />
            
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