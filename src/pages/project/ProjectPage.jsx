




import React from 'react';
import './projectpage.scss';
import { GrGithub } from 'react-icons/gr'
import { DiHtml5, DiCss3, DiJsBadge } from 'react-icons/di';
import { FaReact, FaMobileAlt } from 'react-icons/fa';


const ProjectPage = () => {
  return (
    <>
      <div className='fake-big'>Project</div>
      <div className='section-about-wrapper section__padding'>
        <article className='section-about-description'>
          <div>
            <h2 aria-label='About and Skills'>Project</h2>
            <p>
                Here are a few selected personal projects that I have undertaken as a newcomer in the field.
            </p>
            <p>
            These projects have proven to be quite challenging, but they have also provided me with valuable learning opportunities and helped me enhance my skills.
            </p>
           
          </div>
        </article>
      </div>

      <div className="container">
        <div className="row">
          <div className="example-4 card">
            <div className="wrapper">
              <div className="date">
                <span className="day">Lead-Tracker</span>
              </div>
              <ul className="menu-content">
                <li><a href="https://github.com/Mboy75/Lead-Tracker" rel="noreferrer" target="_blank"><GrGithub className="icon project"/></a></li>
                <li><DiHtml5 /></li>
                <li><DiCss3 /></li>
                <li><DiJsBadge /></li>
              </ul>
              <div className="data">
                <div className="content">
                  <span className="type">Lead-Tracker</span>
                  <h1 className="title"><a href="https://github.com/Mboy75/Lead-Tracker" rel="noreferrer" target="_blank">Chrome extension developed with JavaScript, HTML, and CSS that efficiently collects a list of visited websites. This extension seamlessly integrates with the Chrome browser.</a></h1>
                  <p className="text"></p>
                </div>
              </div>
            </div>
          </div>

          <div className="example-4 card">
            <div className="wrapper">
              <div className="date">
                <span className="day">BlackJack-Game</span>
              </div>
              <ul className="menu-content">
                <li><a href="https://github.com/Mboy75/BlackJack-Game" rel="noreferrer" target="_blank"><GrGithub /></a></li>
                <li><DiHtml5 /></li>
                <li><DiCss3 /></li>
                <li><DiJsBadge /></li>
              </ul>
              <div className="data">
                <div className="content">
                  <span className="type">BlackJack-Game</span>
                  <h1 className="title"><a href="https://github.com/Mboy75/BlackJack-Game" rel="noreferrer" target="_blank">Blackjack game developed using JavaScript, HTML, and CSS. This game provides an immersive and entertaining experience for players</a></h1>
                  <p className="text"></p>
                </div>
              </div>
            </div>
          </div>

          <div className="example-4 card">
            <div className="wrapper">
              <div className="date">
                <span className="day">React Native App</span>
              </div>
              <ul className="menu-content">
                <li><a href="https://github.com/Mboy75/Smile-app" rel="noreferrer" target="_blank"><GrGithub /></a></li>
                <li><DiJsBadge  /></li>
                <li><FaMobileAlt  /></li>
                <li><DiJsBadge  /></li>
              </ul>
              <div className="data">
                <div className="content">
                  <span className="type">React Native App</span>
                  <h1 className="title"><a href="https://github.com/Mboy75/Smile-app" rel="noreferrer" target="_blank">The web app promotes a culture of generosity and kindness, where users connect, help, and support each other based on their needs.</a></h1>
                  <p className="text"></p>
                </div>
              </div>
            </div>
          </div>

          <div className="example-4 card">
            <div className="wrapper">
              <div className="date">
                <span className="day">Portofolio Website</span>
              </div>
              <ul className="menu-content">
                <li><a href="https://github.com/Mboy75/my-portofolio" rel="noreferrer" target="_blank"><GrGithub /></a></li>
                <li><DiCss3 /></li>
                <li><FaReact /></li>
                <li><DiJsBadge  /></li>
              </ul>
              <div className="data">
                <div className="content">
                  <span className="type">Portofolio Website</span>
                  <h1 className="title"><a href="https://github.com/Mboy75/my-portofolio" rel="noreferrer" target="_blank">portfolio website developed with React</a></h1>
                  <p className="text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;

