import React, { useState } from 'react';
import './App.css';
import Video from './Video.mp4';

function App() {
  
  const [toggle, setToggle] = useState(false)

  return (  
     <div className="app">
   
      <section className="showcase">

            <header>
               <h2 className="logo">Travel</h2>
               <div className="toggle"></div>
            </header>
          
           {/* VIDEO || MP4 */}
            <video muted autoPlay loop>
              <source src={Video} type="video/mp4" />
            </video>

           <div className="overlay"></div>
            {/* MAIN SCREEN */}
           <div className="text">
              <h2>Never Stop</h2> 
              <h3>Exploring The World</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                 consequat.</p>
              <a href="/">Explore</a>
           </div>

         <ul className="social">
             <li><a href="/"><img src="https://i.ibb.co/x7P24fL/facebook.png" alt="facebook" /></a></li>
             <li><a href="/"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="twitter" /></a></li>
             <li><a href="/"><img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="instagram" /></a></li>
        </ul>

    </section>
         

       {/* NAVBAR || SIDEBAR */}
         <div className="menu">

        <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">News</a></li>
              <li><a href="/">Destination</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Contact</a></li>
        </ul>

         </div>


     </div>
  );
}

export default App;
