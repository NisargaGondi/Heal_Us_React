import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './stylesheet_for_MainPage.css';
import Animation2 from './components/Animation2';
import Footer_down from './components/footerDown';
import Carousel from './components/Carousel';
import FooterWithClock from './components/FooterWithClock';


function App() {

  
  return (
    <>

    
<div className="App">
      <Navbar/>
      
      

    </div>
    <div class="background">
  <div class="toggle-body">
    <div class="toggle-btn"></div>

    <div class='ripple-background'>
  <div class='circle xxlarge shade1'></div>
  <div class='circle xlarge shade2'></div>
  <div class='circle large shade3'></div>
  <div class='circle mediun shade4'></div>
  <div class='circle small shade5'></div>

  

    <br/><br/><br/><br/><br/><br/><br/><br/>
    
    <div className='gradient'>
    <Animation2/>
    </div>
    
    <br/><br/><br/>

<Carousel/>

</div>


<br/><br/><br/><br/><br/><br/>

<Home/>




<br/><br/><br/><br/><br/><br/>
<div className='container-fluid header_footer'>
<Footer_down/>
</div>



<FooterWithClock/>



</div>
</div>







    </>
  );
}

export default App;
