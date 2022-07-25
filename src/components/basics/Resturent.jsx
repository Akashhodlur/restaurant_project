import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import Menucard from './Menucard'
import Navbar from './Navbar'

const uniqueList = [
    ...new Set(
     Menu.map((currentElement) =>{
        return currentElement.category;
     })
    ),
    "All",
];


const Resturent = () => {
    const [menuData,setMenudata] = useState(Menu)
    const [menuList,setmenuLIst] = useState(uniqueList)
    
    // for button filterning the catgory
    const filterItem = (category) =>{

        // for All
        if(category === "All"){
            setMenudata(Menu);
            return;
        }
        const updatedList = Menu.filter((c) =>{
            return c.category === category;
        });
        setMenudata(updatedList)
    };

  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <Menucard menuData={menuData}/>    
    </>
  )
}

export default Resturent
