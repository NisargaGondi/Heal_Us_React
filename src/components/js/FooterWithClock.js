import React from 'react'
import ClockAni from './ClockAni'


export default function FooterWithClock() {
  return (
    <>
    <div>
      
    <div className="footer">



<div className="sky">
	<div className="sky__phase sky__dawn"></div>
	<div className="sky__phase sky__noon"></div>
	<div className="sky__phase sky__dusk"></div>
	<div className="sky__phase sky__midnight">
		<div className="sky__stars">
        
#stars
#stars2
#stars3
#title

    </div>
	</div>

  <div className=" row align-items-center">
  <div className="col text-center footerText">
<ClockAni/>


</div>
</div>

  
<button id="toggle-animation">
	<span className="playing">Pause</span>
	<span className="paused">Play</span>
</button>


	<div className="orbit">
		<div className="sun"></div>
		<div className="moon"></div>
</div>



</div>
</div>

    </div>

    </>
  )
}
