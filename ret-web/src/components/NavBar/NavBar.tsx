import React, { FC } from 'react';
import {Nav} from "react-bootstrap";
import { useState } from 'react';
import { CardText, CircleFill, CircleHalf } from 'react-bootstrap-icons';

interface MenuItem {
  label: string;
  icon: React.ReactElement;
}




const NavBar = () => {
  function renderMenu(menuItems : MenuItem[]) {
    const items = []
    for(let i = 0; i < menuItems.length; i++) {
      items.push(renderItem(menuItems[i]))
    }
    return items
  }

function renderItem(menuItem : MenuItem) {
  return(
    <li className = 'block'>
       <div className='inline-block'>
          {menuItem.icon} 
        </div>
       <a className = {`inline-block ${isOpen ? 'hidden' : ''}`} href="/home"> {menuItem.label} </a>
    </li>
  )
}
  const [isOpen, setIsOpen] = useState(true);

  const menuItems: MenuItem[] = [
    { label: 'Home', icon: <CircleFill /> },
    { label: 'Page1', icon: <CircleHalf /> },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div className={`h-screen	max-w-fit bg-violet-100 sidebar ${isOpen ? 'open' : ''}`}>
      <div onClick={toggleSidebar}>
        <CardText className={`${isOpen ? 'rotate-90' : ''}`}/>
      </div>
      <nav className={``}>
        <ul>
          {renderMenu(menuItems)}
        </ul>
      </nav>
  </div>)
};

export default NavBar;
