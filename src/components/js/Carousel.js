import React from 'react'
import img1 from "../img/14139908_5414738.jpg"
import img2 from "../img/podcast.jpg"
import video1 from "../img/Headspace___Mini_Meditation___Let_Go_of_Stress(720p).mp4"

export default function Carousel() {
  return (
    <>
    <div>
      
    <div id="carouselExampleIndicators" class=" container  carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    
    <div class="carousel-item">
    <video src={video1}  muted autoPlay={'true'} type="video/mp4" class="d-block h-auto rounded-5 w-100"/>
    </div>

    <div class="carousel-item active">
    <img src={img1} alt="blah" class="d-block h-auto rounded-5 w-100" />
         <div className="carousel-caption">
          <h3 style={{color:'black'}}>Remember</h3>
          <p style={{color:'black'}}>
            <b>The kinder you are to yourself,<br/>
              The kinder you will be to others</b>
            </p>
            </div>

    </div>

    <div class="carousel-item">
    <img src={img2}
         alt="New York" class="d-block rounded-5 h-auto w-100"/>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>

    </>
  )
}
