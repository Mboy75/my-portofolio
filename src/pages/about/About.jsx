import React, {useEffect, useState } from 'react'
import myCV from '../../assets/images/myCV.pdf'
//import { Reveal } from 'react-reveal/Reveal'
//mport Fade from 'react-reveal/Fade'

//import Blast from '../../components/BlastAnimation/Blast'
import Cards from '../../components/skillsCards/Cards'

import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setTimeout(() =>{
      setLetterClass("text-animate-hover")

    }, 4000)
  })

  return (
    <>
      <div className='fake-big'>About</div>
      <div className='section-about-wrapper section__padding'>
        <article className='section-about-description'>
          <div>
            <h2 aria-label='About and Skills'>About & Skills</h2>
            <p>
              After gaining experience in multiple fields, I decided to pursue my passion for web and app development.
            </p>
            <p>
              I went back to school and earned a degree in the field, and now I am ready to transition into a career in this exciting and dynamic industry. With my diverse background and newly acquired skills, I am eager to take on new challenges and contribute to innovative projects.
            </p>
            <p>
              Let's connect and explore the possibilities!
            </p>
            
              <a href={myCV} download className='contact-button submit-button'>
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download CV</span>
                </div>
              </a>
           
          </div>
        </article>
        <Cards />
      </div>
    </>
  );
};

export default About