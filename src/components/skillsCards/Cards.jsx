import React from 'react'
import { Fade } from 'react-reveal/Fade'
import {skillSet} from '../../data/data'

import './card.scss'

const Cards = () => {
    return (
      <div className="about-description-skills">
        {skillSet.map((item, index) => (
          <a
            key={index + item}
            href={index.url} //item.url to navigate to the link 
            target="_blank"
            rel="noopener noreferrer"
            className="skill-container"
          >
            {item.icon}
            <span className="skill__name">{item.spanText}</span>
          </a>
        ))}
      </div>
    );
  };
  

export default Cards