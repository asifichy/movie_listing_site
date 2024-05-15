import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_icon from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {

  const navRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80){
        navRef.current.classList.add('nav-dark') //goes class name 'nav-dark'
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  }, []) // arrow function will execute whenever the component will be loaded

  return (
    <div ref={navRef} className='navbar'>

      {/* left navbar */}
      <div className="navbar-left">
        <img src={logo} alt="icon" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>

      {/* right navbar */}
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />

        {/* profile icon */}
        <div className="navbar-profile">
          <img src={profile_icon} alt="" className='profile' />
          <img src={caret_icon} alt="" />

          <div className="dropdown">
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
