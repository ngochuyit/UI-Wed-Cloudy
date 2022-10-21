import React, {useState} from 'react'
import Logo from "../images/logo.png";



function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

  return (
    
<nav className={nav ? 'nav active': 'nav'}>
   <a className='logo'>
        <img src={Logo} alt='/' />
        
        </a>
    <input type='checkbox' className='menu-btn'/>
    <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
    </label>
    <ul className='menu'>
        <li><a>Home</a></li>
        <li><a>UpLoad</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
        
        </ul>

   </nav>
  )
}

export default Navbar