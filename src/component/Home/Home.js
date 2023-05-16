import React from 'react';
import picture from './../../picture.jpg';
import { BsFillPlayFill } from "react-icons/bs";
import './Home.css';

function Home() {
  return (
    <div className="hero">
        <div className="hero_image">
          <img src={picture} alt="hero" />
        </div>
        <div className="hero_content">
          <div className="hero_text">
            <h1>Be There</h1>
            <p>Deliver brilliant messages in the moments that truly define your brand</p>
          </div>
          <div className="hero_btn">
            <button>
              <a href="#">See How</a> <BsFillPlayFill />
            </button>
          </div>
        </div>
      </div>
  )
}

export default Home