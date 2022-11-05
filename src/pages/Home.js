import { GoogleLogout } from "react-google-login";
import React,{ useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";
// import { googleTranslate} from "../consants/constant";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import "./home.css";


const Home = ({text}) => {
const navigate = useNavigate();
const [languageCodes,setLanguageCodes] = useState([]);
const [language, setLanguage] = useState("en");
const [question, setquestion] = useState("What language do you prefer to read with?");

    const onSuccess = (res) => {
        console.log(res)
        localStorage.removeItem("auth");
        navigate("/");
        console.log('Logout made successfully');
        // alert('Logout made successfully');
        
    }
    const getLanguageCodes = languageCodes => {
        setLanguageCodes({ languageCodes });
      };
    
    const changeHandler = ()=>{

    }
    return ( 
        <>
        <div className="nav-bar">
            <h1><i>Home</i></h1>
            {/* <div>This is my first blog</div> */}

            <div class="right-container">

            <input type="text" class="search-box" placeholder="search"/>
                   
            {/* <button className="sub-btn">{text}</button> */}

            <GoogleLogout
                clientId={'707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com'}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
              
                // cookiePolicy={'single_host_origin'}
                />

            {/* <select
                className="select-language"
                value={language}
                onChange={e => changeHandler(e.target.value)}
                >
          {languageCodes.map(lang => (
            <option key={lang.language} value={lang.language}>
              {lang.name}
            </option>
          ))}
        </select> */}
</div>
        </div>

        {/* <div>
        <GoogleLogout
                clientId={'707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com'}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
              
                // cookiePolicy={'single_host_origin'}
                />
        </div> */}


        <div className="blog">

        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


        </div>

        <center>
        <button className="sub-btn">Convert Hindi</button> 
        <button className="sub-btn">Convert English</button> 
        </center>
       </>
     );
}
 
export default Home;