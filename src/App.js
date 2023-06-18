import './App.css';
import './stylesheet_for_MainPage.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import HealHome from './components/heal_home';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Main from './components/Main';
import ChangePassword from './components/ChangePassword';


function App() {
  return (
    <>
      <BrowserRouter>
          {/* <Navbar/> */}
          <Routes>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/" element={<HealHome/>}></Route>
            <Route path="/Main" element={<Main></Main>}></Route>
            <Route path="/Register" element={<Register></Register>}></Route>
            <Route path="/ForgotPassword" element={<ForgotPassword></ForgotPassword>}></Route>
            <Route path="/ChangePassword" element={<ChangePassword></ChangePassword>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
