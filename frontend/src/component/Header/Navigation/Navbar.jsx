import { Button } from '@mui/material'
import React, { useState } from 'react'
import { RiMenuLine } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { IoRocketSharp } from "react-icons/io5";
import { Category } from '@mui/icons-material';
import CategoryPanel from './CategoryPanel';
import './Navbar.css';


const Navbar = () => {

  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };



  return (

    <>
      <nav className='py-2'>

        <div className='container flex items-center justify-end gap-5'>

          <div className='col1 w-[20%]'>
            <Button className='!text-black gap-2 w-full ' onClick={openCategoryPanel} >
              <RiMenuLine className='text-[18px]' />
              Shop By Category
              <LiaAngleDownSolid className='text-[13px] ml-auto font-bold ' />
            </Button>
          </div>

          <div className='col2 w-[60%]'>

            <ul className='  flex items-center gap-3 nav  '>
              <li className='list-none'>
                <Link to='/' className='link transition text-[16px] font-[500]'>

                  <Button className='link transition font -[500] !text-[rgba(0,0,0,0.7)]
                
                hover:!text-[#ff5252]'> Home</Button>
                </Link>
              </li>

              <li className='list-none relative'>
                <Link to='/' className='link transition text-[16px] font-[500]'>
                  <Button className='link transition font -[500] !text-[rgba(0,0,0,0.7)]
                
                hover:!text-[#ff5252]'>
                    Fashion
                  </Button>
                </Link>


                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0  transition-all">
                  <ul>
                    <li className="list-none w-full relative">

                      <Link to='/' className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                        Men
                      </Button>

                      
                <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0  transition-all">
                  <ul>
                    <li className="list-none w-full">

                      <Link to='/' className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                        T-Shirt
                      </Button>
                      </Link>
                    </li>

                       <li className="list-none">
                          <Link to='/' className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                        Jeans
                        </Button>
                        </Link>
                    </li>
                       <li className="list-none  w-full" >
                      <Link to='/' className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                        Footware
                        </Button>
                        </Link>
                    </li>
                       <li className="list-none  w-full">
                     <Link to='/' className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none'>
                        Watch
                        </Button>
                        </Link>
                    </li>
                       <li className="list-none  w-full">
                     <Link to='/' className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none'>
                        Pants
                        </Button>
                        </Link>
                    </li>
                  </ul>
                </div>
                      </Link>
                    </li>

                       <li className="list-none">
                          <Link to='/' className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                        Women
                        </Button>
                        </Link>
                    </li>
                       <li className="list-none  w-full" >
                      <Link to='/' className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                        Kids
                        </Button>
                        </Link>
                    </li>
                       <li className="list-none  w-full">
                     <Link to='/' className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none'>
                        Boys
                        </Button>
                        </Link>
                    </li>
                       <li className="list-none  w-full">
                     <Link to='/' className='w-full'>
                      <Button className='!text-[rgba(0,0,0,0.8)]  w-full !text-left !justify-start !rounded-none'>
                        Girls
                        </Button>
                        </Link>
                    </li>
                  </ul>
                </div>


              </li>

              <li className='list-none'>
                <Link to='/' className='link transition text-[16px] font-[500]'>

                  <Button className='link transition font -[500] !text-[rgba(0,0,0,0.7)]
                
                hover:!text-[#ff5252]'>Electronics</Button>

                </Link>
              </li>

              <li className='list-none'>
                <Link to='/' className='link transition text-[16px] font-[500]'>

                  <Button className='link transition font -[500] !text-[rgba(0,0,0,0.7)]
                
                hover:!text-[#ff5252]'>  Bags</Button>

                </Link>
              </li>

              <li className='list-none'>
                <Link to='/' className='link transition text-[16px] font-[500]'>
                  <Button className='link transition font -[500] !text-[rgba(0,0,0,0.7)]
                
                hover:!text-[#ff5252]'> Footwear</Button>

                </Link>
              </li>

              <li className='list-none'>
                <Link to='/' className='link transition text-[16px] font-[500]'>

                  <Button className='link transition font -[500] !text-[rgba(0,0,0,0.7)]
                
                hover:!text-[#ff5252]'>Grocery</Button>
                </Link>
              </li>

              <li className='list-none'>
                <Link to='/' className='link transition text-[16px] font-[500]'>

                  <Button className='link transition font -[500] !text-[rgba(0,0,0,0.7)]
                
                hover:!text-[#ff5252]'> Beauty</Button>
                </Link>
              </li>

              <li className='list-none'>
                <Link to='/' className='link transition text-[16px] font-[500]'>
                  <Button className='link transition font -[500] !text-[rgba(0,0,0,0.7)]
                
                hover:!text-[#ff5252]'> Wellness</Button>

                </Link>
              </li>

              <li className='list-none'>
                <Link to='/' className='link transition text-[16px] font-[500]'>
                  <Button className='link transition font -[500] !text-[rgba(0,0,0,0.7)]
                
                hover:!text-[#ff5252]'>Jwellery</Button>

                </Link>
              </li>
            </ul>

          </div>


          <div className='col3 w-[20%]' >

            <p className='text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0'>
              <IoRocketSharp className='text-[18px]' />
              Free International Delevery</p>

          </div>

        </div>
      </nav>
      {/*categorypalel*/}
      <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} />

    </>

  )
}

export default Navbar
