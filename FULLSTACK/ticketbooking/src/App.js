import './App.css';

import './Components/MyProfile';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './Components/Main';
import Login1 from './Components/Login1';
import Signup from './Components/Signup';
import Home from './Components/Home';
 import MyProfile from './Components/MyProfile';
import AddBooking from './Components/AddBooking';
import UpdatePage from './Components/UpdatePage';
// import ForgotPassword from './Components/ForgotPassword';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<MyProfile />}></Route>
    <Route path="/login" element ={<Login1 />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    <Route path="/home" element ={<Home />}></Route>
    <Route path="/add" element ={<AddBooking />}></Route>
    <Route path="/main" element ={<Main />}></Route>
    {/* <Route path="/for" element ={<ForgotPassword />}></Route> */}

    <Route path="/update/:id" element ={<UpdatePage />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}
export default App;