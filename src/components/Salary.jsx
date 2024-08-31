import React from 'react'
import { datas } from '../constants'
import Navbar from './Navbar'

const Salary = () => {
  return (
    <div>
      <Navbar />
      <div className='text-primary flex flex-col items-center overflow-x-scroll w-full bg-tertiary p-4'>
      <div className='w-[99%] md:w-[80%]'>
        <h5 className='text-[12px] font-medium w-full'>Home / Salary</h5>

        <div className='flex justify-between flex-col md:flex-row  items-center pt-3 mt-2'>
          <div className=' flex flex-row gap-3 items-center justify-center'>
            <h1 className='font-semibold text-[12px] md:text-[18px]'><i class="fa-solid fa-arrow-left mr-3 "></i> Employee List</h1>
            {/* <button className='text-[12px] bg-secondary pl-2 pr-2 pt-1 pb-1 rounded-md font-semibold'><i class="fa-solid fa-plus"></i> New employee</button> */}
          </div>
          <ul className='flex items-center justify-center gap-3'>
            <li className='flex flex-row h-full items-center justify-center gap-2 text-[15px] font-semibold'><span className='text-[5px] font-semibold'>Total</span><span>50</span></li>
            <li className='flex flex-row h-full items-center justify-center gap-2 text-[15px] font-semibold'><span className='text-[5px] font-semibold'>Permanent</span><span>40</span></li>
            <li className='flex flex-row h-full items-center justify-center gap-2 text-[15px] font-semibold'><span className='text-[5px] font-semibold'>Intern</span><span>5</span></li>
            <li className='flex flex-row h-full items-center justify-center gap-2 text-[15px] font-semibold'><span className='text-[5px] font-semibold'>Freshers</span><span>5</span></li>
          </ul>
        </div>

        <div className='p-3 mt-10 bg-white w-full h-full rounded-md'>
          <table className='text-[5px] w-full mt-3 table overflow-x-visible'>
            <tr className='text-text text-[10px] text-left'>
              <th>Name</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Payment Date</th>
            </tr><br />
            {
              datas.map((data,index)=>{
                  return <tr className='font-semibold text-[5px] md:text-[12px] row'>
                    <td><i class="fa-solid fa-user"></i> {data.name}</td>
                    <td>Rs.{data.salary.amount}</td>
                    <td style={{
                      color:
                        data.salary.status === "paid"
                          ? "green"
                          : "red"
                          ,
                    }}>{data.salary.status}</td>
                    <td>{data.salary.paymentDate}</td>
                  </tr>
                
              })
            }
            
            
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Salary