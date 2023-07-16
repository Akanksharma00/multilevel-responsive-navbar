import React from 'react'
import { menuItems } from '../../Constants/menuItems';
import style from '../../Styles/Navbar.module.css';
import MenuItems from './MenuItems';

const Navbar = () => {
  return (
    <nav>
        <ul className={style['menus']}>
            {menuItems?.map((val,index)=> {
                const depthLevel = 0;
                return <MenuItems items={val} key={index} depthLevel={depthLevel}/>
            })}
        </ul>
    </nav>
  )
}

export default Navbar