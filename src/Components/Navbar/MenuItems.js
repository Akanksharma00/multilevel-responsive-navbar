import React,{useState, useEffect, useRef} from 'react';
import Dropdown from './Dropdown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import style from '../../Styles/Navbar.module.css';

const MenuItems = ({items, depthLevel}) => {
    let ref = useRef();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdown = (val) => {
        setShowDropdown(val);
    }

    useEffect(() => {
        const handler = (event) => {
         if (showDropdown && ref.current && !ref.current.contains(event.target)) {
          setShowDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [showDropdown]);

  return (
    <li>
        {items?.subMenu ? (
            <>
            <button className={ style['dropdown-btn'] } onMouseOver={()=>setShowDropdown(true)} >
                <span>{items?.title}{' '}</span>
                {depthLevel > 0 ? <span><ChevronRightIcon className={style['arrow-icon']}/></span> : <span><ExpandMoreIcon className={style['arrow-icon']}/></span>}
                
            </button>
            <Dropdown submenus={items?.subMenu} expanded={showDropdown} handleDropdown={handleDropdown} depthLevel={depthLevel}/>
            </>
        ): (
            <a href={items?.url} ref={ref}>{items?.title}</a>
        )}
    </li>
  )
}

export default MenuItems