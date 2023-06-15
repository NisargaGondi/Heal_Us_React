import './App.css';
import './stylesheet_for_MainPage.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import HealHome from './components/heal_home';


function App() {


  return (
    <>

      <BrowserRouter>

          {/* <Navbar/> */}
          <Routes>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/" element={<HealHome/>}></Route>
          </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
