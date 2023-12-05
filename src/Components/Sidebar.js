import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx"; 
import YtLogo from '../assets/YT-Logo.svg'
import Home from '../assets/home.svg'

const Sidebar = () => {
  return (
    <div className='side'>
    <div className='sidebar'>
        <div className='top-side'>
            <div className='toggle-btn'><RxHamburgerMenu/></div>
            <div className='logo'>
                <img src={YtLogo} alt='logo'></img>
            </div>
        </div>
        <div className='side-home'>
            <div className='side-btns'>
                <ul className='ul'>
                    <li><img src={Home} className='side-left-logo' alt=''></img><p>Home</p></li>
                    <li><img src='https://syedmasood-git.github.io/Youtube-Clone/Assets/2.png' className='side-left-logo' alt='ab'></img><p>Explore</p></li>
                    <li><img src='https://syedmasood-git.github.io/Youtube-Clone/Assets/3.svg' className='side-left-logo' alt='ab'></img><p>Subscriptions</p></li>
                </ul>
            </div>
            <div className='side-btns'>
            <ul className='ul lib-ul'>
                    <li><img src='https://syedmasood-git.github.io/Youtube-Clone/Assets/4.svg' className='side-left-logo' alt='ab'></img><p>Library</p></li>
                    <li><img src='https://syedmasood-git.github.io/Youtube-Clone/Assets/5.svg' className='side-left-logo' alt='ab'></img><p>History</p></li>
                    <li><img src='https://syedmasood-git.github.io/Youtube-Clone/Assets/6.svg' className='side-left-logo' alt='ab'></img><p>Your Videos</p></li>
                    <li><img src='https://syedmasood-git.github.io/Youtube-Clone/Assets/7.svg' className='side-left-logo' alt='ab'></img><p>Watch Later</p></li>
                    <li><img src='https://syedmasood-git.github.io/Youtube-Clone/Assets/8.svg' className='side-left-logo' alt='ab'></img><p>Liked Videos</p></li>
                    <li><img src='https://syedmasood-git.github.io/Youtube-Clone/Assets/9.svg' className='side-left-logo' alt='ab'></img><p>Show More</p></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Sidebar
