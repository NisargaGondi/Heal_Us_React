import '../../App.css';
import Navbar from './Navbar';
import Home from './Home';
import '../../stylesheet_for_MainPage.css';
import Animation2 from './Animation2';
import Footer_down from './footerDown';
import Carousel from './Carousel';
import FooterWithClock from './FooterWithClock';


function HealHome() {


  return (
    <>



      
        <div className="App">

          <Navbar Home="HOME" ContactUs="CONTACT US" Features="FEATURES" LOGIN="LOG IN" />


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



              <br /><br /><br /><br /><br /><br /><br /><br />

              <div className='gradient'>
                <Animation2 />
              </div>

              <br /><br /><br />

              <Carousel />

            </div>


            <br /><br /><br /><br /><br /><br />

            <Home />




            <br /><br /><br /><br /><br /><br />
            <div className='container-fluid header_footer'>
              <Footer_down />
            </div>



            <FooterWithClock />



          </div>
        </div>







      

    </>
  );
}

export default HealHome;
