import React,{useEffect,useState,useRef} from 'react'
import SubmissionPage from '../../components/Task/SubmissionPage'
function AdminSubmission() {
      
    return (
    <div>
          <SubmissionPage url={'http://localhost:4000/tasks/get-ca-task'}/>  
    </div>
    )
}

export default AdminSubmission
