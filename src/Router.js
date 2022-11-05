
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';

function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Login/>}/>
          <Route path="/home" element ={<Home text="Logout"/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default Router;
 