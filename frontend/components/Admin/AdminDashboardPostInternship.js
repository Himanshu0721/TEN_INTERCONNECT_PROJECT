import React from 'react'
import AddInternship from '../Jobs/AddInternship'

const AdminDashboardPostInternship = (props) => {
  return (
    <div className='postjobsection'>
            <AddInternship 
            addinternshiphandler={props.addinternshiphandler}
            internshipDetails={props.internshipDetails}
            setInternshipDetails={props.setInternshipDetails}
            />
    </div>
  )
}

export default AdminDashboardPostInternship