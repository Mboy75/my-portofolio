import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Blast from '../BlastAnimation/Blast'



import './header.scss'

//const nameArray = ["M", "a", "s", "s", "i"]
//const jobArray = ["w", "e", "b", "d", "e", "v", "e", "l", "o", "p", "e", "r"]

const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setTimeout(() =>{
      setLetterClass("text-animate-hover")

    }, 4000)
  })
  return (
    <section className='section-1 header__container section__padding'>
        <main className='intro-page '>
            <h1>
              <span className={ `${letterClass} _2` }>H</span>
              <span className={ `${letterClass} _3` }>e</span>
              <span className={ `${letterClass} _4` }>l</span>
              <span className={ `${letterClass} _5` }>l</span>
              <span className={ `${letterClass} _6` }>o</span>
              <br />
              <span className={ `${letterClass} _7` }>I</span>
              <span className={ `${letterClass} _8` }>'</span>
              <span className={ `${letterClass} _9` }>m</span>
              {'  '}
              <span className={ `${letterClass} _10` }>M</span>
              <span className={ `${letterClass} _11` }>a</span>
              <span className={ `${letterClass} _12` }>s</span>
              <span className={ `${letterClass} _13` }>s</span>
              <span className={ `${letterClass} _14` }>i</span>
              {/*<Blast letterClass={letterClass} arrayStr={nameArray} indexLetter={22} />*/ }
               <br />
               <span className={ `${letterClass} _15` }>T</span>
               <span className={ `${letterClass} _16` }>h</span>
               <span className={ `${letterClass} _17` }>a</span>
               <span className={ `${letterClass} _18` }>n</span>
               <span className={ `${letterClass} _19` }>k</span>
               <span className={ `${letterClass} _20` }>s</span>
               {'  '}
               <span className={ `${letterClass} _21` }>f</span>
               <span className={ `${letterClass} _22` }>o</span>
               <span className={ `${letterClass} _23` }>r</span>
               {'  '}
               <span className={ `${letterClass} _24` }>s</span>
               <span className={ `${letterClass} _25` }>t</span>
               <span className={ `${letterClass} _26` }>o</span>
               <span className={ `${letterClass} _27` }>p</span>
               <span className={ `${letterClass} _28` }>p</span>
               <span className={ `${letterClass} _29` }>i</span>
               <span className={ `${letterClass} _30` }>n</span>
               <span className={ `${letterClass} _31` }>g</span>
               {'  '}
               <span className={ `${letterClass} _32` }>b</span>
               <span className={ `${letterClass} _33` }>y</span>
               <span className={ `${letterClass} _34` }>.</span>
                
            </h1>
            <p className="text-desc">WEB DEVELOPER, Milano</p>
            <Link to="/contact" className="contact-button">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Contact me</span>
            </div>
          </Link>
        </main>
       
    </section>
  )
}

export default Header