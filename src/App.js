import './App.css';
import './stylesheet_for_MainPage.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import HealHome from './components/heal_home';
import Register from './components/Register';


function App() {


  return (
    <>

      <BrowserRouter>

          {/* <Navbar/> */}
          <Routes>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/" element={<HealHome/>}></Route>
            <p1>hi</p1>
          </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
