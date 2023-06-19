import React, { useEffect, useRef } from 'react';
import '../css/mask.css';
import video1 from '../img/1080p.mp4';

export default function Mask() {
  const textRef = useRef(null);

  useEffect(() => {
    const texts = ["Welcome to Heal Us", "Be the change you seek"];
    let currentIndex = 0;

    const updateText = () => {
      textRef.current.innerHTML = texts[currentIndex];
      currentIndex = (currentIndex + 1) % texts.length;
    };

    const interval = setInterval(updateText, 5000); // Change the interval duration (in milliseconds) as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <video src={video1} autoPlay playsInline muted loop preload></video>
      <svg className="svg" height="100%" width="100%">
        <defs>
          <mask id="mask" x="0" y="0" height="100%" width="100%">
            <rect x="0" y="0" height="100%" width="100%" />
            <text
              ref={textRef}
              x="50%"
              y="50%"
              fill="red"
              textAnchor="middle"
              className="badge text-wrap">
              Welcome to Heal Us
            </text>
            <text
              x="50%"
              y="70%"
              fill="red"
              textAnchor="middle"
              className="badge text-wrap"
            >
              Fuck You Haaid
            </text>
            
          </mask>
        </defs>
        <rect x="0" y="0" height="100%" width="100%" />
      </svg>
    </>
  );
}
