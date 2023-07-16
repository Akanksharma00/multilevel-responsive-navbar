import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { menuItems } from '../../Constants/menuItems';
import style from '../../Styles/Navbar.module.css';
import MenuItems from './MenuItems';

const MobileNav = () => {
    const [showNavbar, setShowNavbar] = useState(false);
  return (
    <nav>
        <button className={style['hamburger-btn']} onMouseOver={()=>setShowNavbar(true)} onMouseOut={()=>setShowNavbar(false)}>
            <MenuIcon />
        </button>
        {showNavbar && (
            <ul className={style['mobile-menus']} onMouseOver={()=>setShowNavbar(true)} onMouseOut={()=>setShowNavbar(false)}>
                {menuItems?.map((val,index)=>{
                    const depthLevel = 0;
                    return <MenuItems items={val} key={index} depthLevel={depthLevel}/>
                })}
            </ul>
        )}
    </nav>
  )
}

export default MobileNav