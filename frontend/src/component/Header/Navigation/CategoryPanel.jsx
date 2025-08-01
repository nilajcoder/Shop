import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IoClose } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import '../Navigation/Navbar.css'
import { Link } from 'react-router-dom';
import { BiCheckboxMinus } from "react-icons/bi";

const CategoryPanel = (props) => {

  const [submenuIndex,setSubmenuIndex]=useState(null)

  
  const [innersubmenuIndex,setInnerSubmenuIndex]=useState(null)

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen)
  };

  const openSubmenu=(index)=>{
    if(submenuIndex===index){
      setSubmenuIndex(null)
    } else{
       setSubmenuIndex(index)
    }
     
  }


    const openInnerSubmenu=(index)=>{
    if(innersubmenuIndex===index){
      setInnerSubmenuIndex(null)
    } else{
       setInnerSubmenuIndex(index)
    }
     
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel" >

      <h3 className='p 3 text-[16px] font-[500] flex items-center justify-between'>
        Shop By Category <IoClose onClick={toggleDrawer(false)} className='cursor-pointer text-[20px] ' />
      </h3>

      <div className='scroll'>

        <ul className='w-full'>
          <li className='list-none flex items-center relative flex-col'>
                 <Link to='/'className='w-full'>
            <Button className='w-full !text-left !justify-start !px-3 !text-black'>
              Fashion
              </Button>
              </Link>

              {
                  submenuIndex===0  ?

                    < BiCheckboxMinus className='absolute top-[10px] right-[15px] cursor-pointer '
              onClick={()=>openSubmenu(0)}/>
              :

              <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer '
              onClick={()=>openSubmenu(0)}/>

              }
            

             


              {
                submenuIndex===0 &&
                 <ul className='submenu  w-full pl-3  '>
              <li className='list-none relative'>
                  <Link to='/' className='w-full'>
                <Button className='w-full !text-left !justify-start !px-3 !text-black'>
                  Appreal
                  </Button>
                  </Link>


                   {
                  innersubmenuIndex===0  ?

                    < BiCheckboxMinus className='absolute top-[10px] right-[15px] cursor-pointer '
              onClick={()=>openInnerSubmenu(0)}/>
              :

              <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer '
              onClick={()=>openInnerSubmenu(0)}/>

              }
              


                {
                  innersubmenuIndex===0 &&  
                  
                  <ul className='inner_submenu  w-full pl-3  '>
              <li className='list-none relative mb-1'>

                <Link to='/' className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                  Smart Tablet
                  </Link>
      

              </li>


                 <li className='list-none relative mb-1'>

                <Link to='/' className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                  Crep-T-Shirt
                  </Link>
      

              </li>

                 <li className='list-none relative mb-1'>

                <Link to='/' className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                  Leather Watch
                  </Link>
      

              </li>


                 <li className='list-none relative mb-1'>

                <Link to='/' className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                  Rolling Diamond
                  </Link>
      

              </li>

              

              
            </ul>
                }
  


   

              </li>
            </ul>
              }


           


          </li>


           <li className='list-none flex items-center relative flex-col'>
                 <Link to='/'className='w-full'>
            <Button className='w-full !text-left !justify-start !px-3 !text-black'>
              Outware
              </Button>
              </Link>

              {
                  submenuIndex===1  ?

                    < BiCheckboxMinus className='absolute top-[10px] right-[15px] cursor-pointer '
              onClick={()=>openSubmenu(1)}/>
              :

              <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer '
              onClick={()=>openSubmenu(1)}/>

              }
            

             


              {
                submenuIndex===1 &&
                 <ul className='submenu  w-full pl-3  '>
              <li className='list-none relative'>
                  <Link to='/' className='w-full'>
                <Button className='w-full !text-left !justify-start !px-3 !text-black'>
                  Appreal
                  </Button>
                  </Link>


                   {
                  innersubmenuIndex===1 ?

                    < BiCheckboxMinus className='absolute top-[10px] right-[15px] cursor-pointer '
              onClick={()=>openInnerSubmenu(1)}/>
              :

              <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer '
              onClick={()=>openInnerSubmenu(1)}/>

              }
              


                {
                  innersubmenuIndex===1 &&  
                  
                  <ul className='inner_submenu w-full pl-3  '>
              <li className='list-none relative mb-1'>

                <Link to='/' className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                  Smart Tablet
                  </Link>
      

              </li>


                 <li className='list-none relative mb-1'>

                <Link to='/' className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                  Crep-T-Shirt
                  </Link>
      

              </li>

                 <li className='list-none relative mb-1'>

                <Link to='/' className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                  Leather Watch
                  </Link>
      

              </li>


                 <li className='list-none relative mb-1'>

                <Link to='/' className=' link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                  Rolling Diamond
                  </Link>
      

              </li>

              

              
            </ul>
                }
  


   

              </li>
            </ul>
              }


           


          </li>
        </ul>
      </div>

    </Box>
  );

  return (
    <div>

      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default CategoryPanel
