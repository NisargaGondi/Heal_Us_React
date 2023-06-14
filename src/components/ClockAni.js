import React,{useEffect} from 'react'
import './clock.css'
import moment from 'moment';    

export default function ClockAni() {

    useEffect(() => {
        requestAnimationFrame(updateTime);
      }, []);
    
      function updateTime() {
        const currentDate = moment();
    
        document.documentElement.style.setProperty('--timer-day', "'" + currentDate.format("dd") + "'");
        document.documentElement.style.setProperty('--timer-hours', "'" + currentDate.format("k") + "'");
        document.documentElement.style.setProperty('--timer-minutes', "'" + currentDate.format("mm") + "'");
        document.documentElement.style.setProperty('--timer-seconds', "'" + currentDate.format("ss") + "'");
    
        requestAnimationFrame(updateTime);
      }

  return (
    <>
    <div className='clock_body'>
      
    <div className="clock-container">
  <div className="clock-col">
    <p className="clock-day clock-timer">
    </p>
    <p className="clock-label fs-2">
      Day
    </p>
  </div>
  <div className="clock-col ">
    <p className="clock-hours clock-timer">
    </p>
    <p className="clock-label fs-2">
      Hours
    </p>
  </div>
  <div className="clock-col ">
    <p className="clock-minutes clock-timer">
    </p>
    <p className="clock-label fs-2">
      Minutes
    </p>
  </div>
  <div className="clock-col ">
    <p className="clock-seconds clock-timer">
    </p>
    <p className="clock-label fs-2">
      Seconds
    </p>
  </div>
</div>
    </div>
    </>
  )
}
