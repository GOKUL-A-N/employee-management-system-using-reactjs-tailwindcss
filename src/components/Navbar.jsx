import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    // "Employee","Salary","Attendance"

    const navlist = [
        {
            link: "/dashboard",
            name: "Dashboard",
        },
        {
            link: "/salary",
            name: "Salary",
        }
    ]

  return (
    <div className='h-[50px] w-full bg-primary flex items-center justify-between overflow-hidden'>
        <div className='font-semibold text-tertiary p-4 md:visible invisible'>
            <h1>ATOM</h1>
        </div>
        <ul className='flex flex-row items-center justify-center gap-3 text-tertiary text-[14px] font-semibold'>
            {
                navlist.map((nav,index) => <Link  key={index} to={nav.link}><li className='hover:underline cursor-pointer p-1 decoration-secondary'>{nav.name}</li></Link>)
            }
        </ul>
        <div className='font-semibold cursor-pointer text-tertiary p-4 flex flex-row items-center justify-center gap-3 text-[12px]  md:visible invisible'>
        <i className="fa-solid fa-user"></i>
        <h1>Tony Stark</h1>
        </div>
    </div>
  )
}

export default Navbar