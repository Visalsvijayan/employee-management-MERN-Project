import React from 'react'
import SummeryCard from './SummeryCard'
import { FaBuilding, FaCheckCircle, FaFileAlt, FaHourglass, FaMoneyBillWave, FaTimesCircle, FaUser, FaUsers } from 'react-icons/fa'

const AdminSummery = () => {
  return (
    <div className='p-6'>
      <h3 className='text-2xl font-bold '>Dahbaord Overview</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 '>
        <SummeryCard icon={<FaUsers/>} text="Total employees" number={13}  color='bg-teal-600'/>
        <SummeryCard icon={<FaBuilding/>} text="Total Departments " number={13} color='bg-yellow-600' />
        <SummeryCard icon={<FaMoneyBillWave/>} text="Monthly Pay" number={13} color='bg-red-600'  />

      </div>
      <div className='mt-12'>
        <h4 className='text-2xl font-bold text-center mb-6 '>Leave Details</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-6'>
          <SummeryCard icon={<FaFileAlt/>} text="Leave Applied" number={13}  color='bg-teal-600'/>
          <SummeryCard icon={<FaCheckCircle/>} text="Leave Approved " number={13} color='bg-green-600' />
          <SummeryCard icon={<FaHourglass/>} text="Leave Pending" number={13} color='bg-yellow-600'  />
          <SummeryCard icon={<FaTimesCircle/>} text="Leave Rejected" number={13} color='bg-red-600'  />
        </div>

      </div>

    </div>
  )
}

export default AdminSummery
