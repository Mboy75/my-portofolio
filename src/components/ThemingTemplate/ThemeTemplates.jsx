import React from 'react'
//import { fiSettings } from 'react-icons/fi'
//import {BsMoonStars, BsFillSunFill, BsXLG } from 'react-icons/bs'
import {GiVineFlower} from 'react-icons/gi'
import { Link } from 'react-router-dom'

import './themetemplate.scss'



const ThemeTemplates = () => {
  return (
    <>
      {/* GiVineFlower settings */}
      <div className='theme-icon-wrapper'>
      <Link to={"/"} className='logo-section'>
        
         <GiVineFlower className='theme-icon '></GiVineFlower>

      </Link>  
      </div>
      {/* theme wrapper  */}

     
    </>
  )
}
export default ThemeTemplates