import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { sideBarMenu, socialIcons } from '../../data/data'
import './sidebar.scss'

const SideBar = () => {
  return (
    <aside className='aside'>
        <div className="aside-wrapper">
            <Link to={"/"} className='logo-section'>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" className="logo-container">
                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="30">
                    <tspan fill="#FF7171">ⵎⴰ</tspan>
                    <tspan fill="#C2DAB8">ⵙⵏⵙ</tspan>
                    <tspan fill="#9CA7C6">ⴻⵏ</tspan>
                </text>
            </svg>
                                
                    {/*<span className='switch__color' style={{ fontSize: '1.8rem' }}>Massi</span>*/}
            </Link>
            <ul className='side-link'>{sideBarMenu.map((link, index) => {
                const {text, url, icon} = link
                return(
                    <li key={index}>
                        <NavLink to={url} className={({isActive}) => {
                            return isActive ? "nav__links active-links" : "nave__links"
                        }}>
                            {icon}
                            {text}
                        </NavLink>
                    </li>
                )
             })}
            </ul>
            <div className="social-icon">
                {socialIcons.map((icons, index) => {
                    const {icon, url} = icons
                    return(
                        <a href={url} key={index} rel="noreferrer" target="_blank">
                            {icon}
                        </a>
                    )
                })}
            </div>
        </div>
    </aside>
  )
}

export default SideBar