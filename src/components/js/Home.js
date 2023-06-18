import React from 'react'
import img1 from "../img/kindpng_7207629.png"
import img2 from "../img/love.png"
import img3 from "../img/tolerance.png"
import img4 from "../img/homepage_phone_mockup_ab2e67d2dc821f5cfc64e1aa4c6f051a.png"
import img5 from "../img/mindfulness-and-meditation-mini-lesson.png"
import img6 from "../img/people-chatting-with-phones-on-social-media-vector-26839822.png"
import img7 from "../img/ynews-sense-well-being.jpg"
import img8 from "../img/task.png"
import Animation1 from './Animation1'
import CandleAnimation from './CandleAnimation'
import Animation3 from './Animation3'



export default function Home() {


  return (
    <>
    <div>
      <br/>
<br/>

<div className="container-xxl">
  <div className="row align-items-center">
   
    <div className="col">
      
      <img  src={img1} alt="blah" width="25%"/>
      <span style={{fontSize:'x-large'}}><b>Get Your Mindfulness!</b></span>
      <p><i>"The goal of mindfulness is to wake up to the inner workings of our mental,
       emotional, and physical processes."</i></p>
      
    </div>
    <div className="col">
      <img src={img2} alt="blah" width="25%"/>
      <span style={{fontSize:'x-large'}}><b>Tell Your Stories!</b></span>
      <p><i>"Storytelling is the most powerful way to put ideas into the world today."</i></p>
    </div>
    <div className="col">
      <img src={img3} alt="blah" width="25%"/>
      <span style={{fontSize:'x-large'}}><b>Always be You!</b></span>
      <p><i>“You, being yourself, unknowingly inspire others to be themselves.”</i></p>
    </div>
  
  </div>
</div>




<div className='container' style={{marginLeft:500 +'px'}}>
<h1>
<td><Animation1/></td>
    <td><Animation3/></td>

    </h1>
    </div>

<div className="container">


  <div className="row align-items-center">

  
   
    <div className="col">

    
      
      <img src={img4} alt="blah" width="100%" className='rounded-5'/>
    </div>


 
  
  <div className='col'>

  <div className="header_storyspace but_hover1" >

  

      <div className="waviy" style={{marginLeft: 75 + 'px'}}>
      <span style={{'--i':1}}><b>S</b></span>
  <span style={{'--i':2}}><b>t</b></span>
  <span style={{'--i':3}}><b>o</b></span>
  <span style={{'--i':5}}><b>r</b></span>
  <span style={{'--i':4}}><b>y</b></span>
  <span style={{'--i':6}}><b> </b></span>
  <span style={{'--i':7}}><b>S</b></span>
  <span style={{'--i':8}}><b>p</b></span>
  <span style={{'--i':9}}><b>a</b></span>
  <span style={{'--i':10}}><b>c</b></span>
  <span style={{'--i':11}}><b>e</b></span>

      </div>
      <p style={{marginLeft:20 + 'px', fontSize:20 + 'px'}}><i>"Storytelling is a powerful tool in mental health, allowing individuals to express their emotions and connect with others. Sharing personal stories can reduce feelings of isolation and loneliness, promote understanding, and inspire positive change. By hearing stories of overcoming adversity or learning to cope with difficult situations, individuals can develop a sense of purpose and feel empowered to make positive changes in their lives. Storytelling can be used in a range of mental health settings to promote awareness and reduce stigma. Overall, storytelling is a valuable therapeutic tool that helps individuals to process their emotions, gain insight, and build connections."</i></p>
    </div>

  </div>
</div>
</div>

<br/><br/><br/><br/>
<div className="container">
  <div className="row align-items-center">
   
    <div className="col">
      
      <img src={img5} alt="blah" className='rounded-5' width="90%"/>
    </div>
    
  <div className="col header_mindfulness but_hover2" >
    <div className="content">
     <h6 style={{marginLeft: 40 + 'px'}}><b>Mindfulness</b></h6>
     <h6 style={{marginLeft: '40px'}}><b>Mindfulness</b></h6>
      
    </div>
      <p style={{marginLeft:20 + 'px', marginTop: 30 + 'px', fontSize:20 + 'px'}}><i>"Mindfulness is a valuable tool for improving mental health by helping individuals to stay present and focused on the present moment. By bringing attention to the present moment and observing thoughts and emotions without judgment, individuals can reduce stress and anxiety, increase resilience, and improve overall well-being. Mindfulness practices can be integrated into daily life, including through meditation, breathing exercises, and body awareness practices. Overall, mindfulness has been shown to be effective in reducing symptoms of anxiety, depression, and other mental health conditions, and can be a valuable addition to traditional therapy and treatment approaches."</i></p>
    </div>

  </div>
</div>

<br/><br/><br/><br/>
<div className="container">
  <div className="row align-items-center">
   
    <div className="col">
      
      <img src={img6} alt="blah" className='rounded-5' width="90%"/>
    </div>
  
    
  <div className="col header_communion but_hover3 waviy1" >
       
      <span style={{'--i':1}}>C</span>
      <span style={{'--i':2}}>o</span>
      <span style={{'--i':3}}>m</span>
      <span style={{'--i':4}}>m</span>
      <span style={{'--i':5}}>u</span>
      <span style={{'--i':6}}>n</span>
      <span style={{'--i':7}}>i</span>
      <span style={{'--i':8}}>o</span>
      <span style={{'--i':9}}>n</span>
   
      <p style={{marginLeft:20 + 'px', fontSize:20 + 'px'}}><i>"Communion, or the act of sharing experiences and connecting with others, can be a powerful tool for improving mental health. By connecting with others and sharing common experiences, individuals can reduce feelings of isolation and loneliness, which can contribute to depression and anxiety. Communion can take many forms, including through social support networks, group therapy, or religious or spiritual practices."</i></p>
    </div>

  </div>
</div>

<br/><br/><br/><br/><br/><br/><br/>
<div className="container">



  <div className="row align-items-center">
   
    <div className="col">
      
      <img src={img7} alt="blah" className='rounded-5' width="90%"/>
    </div>

 
    
  <div className="col header_selfheal but_hover4" >

  <CandleAnimation/>
        <div className="selfheal_body">
        <div className = "selfheal_div"> 
          <span style={{fontSize:50 + 'px'}}>Self Heal</span>
        </div>
      </div>
    
      <p style={{marginLeft:20+ 'px', fontSize:20 + 'px'}}><i>"Self-healing, or the process of taking an active role in one's own mental health and well-being, can be a powerful tool for improving overall mental health. This can involve various self-care practices, such as exercise, healthy eating, meditation, or journaling, as well as seeking professional help when necessary. By taking an active role in their own mental health, individuals can increase their resilience, improve their coping skills, and reduce symptoms of depression and anxiety."</i></p>
    </div>

  </div>
</div>

<br/><br/><br/><br/>
<div className="container">
  <div className="row align-items-center">
   
    <div className="col">
      
      <img src={img8} className='rounded-5' alt="blah" />
    </div>
    
  <div className="col header_dailytasks but_hover5" style={{marginBottom:100 + 'px'}}>
    <div className="words word1 daily header_daily">&nbsp
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b>D</b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b> </b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b>a</b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b> </b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b>i</b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b> </b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b>l</b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b> </b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b>y</b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b> </b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b> </b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b> </b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b>T</b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b> </b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b>a</b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b> </b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b>s</b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b> </b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b>k</b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b> </b></span>
    <span className="daily_h1" style={{fontSize:60 + 'px'}}><b>s</b></span>
  </div>
      <p style={{marginLeft:20 +'px', fontSize:20 + 'px'}}><i>"Engaging in daily tasks and routines can be beneficial for maintaining good mental health. It provides a sense of structure, purpose, and accomplishment that can boost self-esteem and reduce stress. These tasks can be simple activities such as making the bed, doing laundry, or cooking a meal. By completing these tasks regularly, individuals can feel a sense of control over their environment and daily life, which can lead to a more positive outlook. Additionally, completing tasks can release endorphins, the body's natural mood-boosters, which can promote a sense of well-being. Overall, daily tasks and routines can be an effective way to improve mental health and promote overall well-being."</i></p>
    </div>

  </div>
</div>

    </div>
    

    </>
  )
}
