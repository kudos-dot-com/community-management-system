import React,{useEffect,useState,useRef} from 'react'
import SubmissionPage from '../../components/Task/SubmissionPage'
function OrgSubmission() {
      
    return (
    <div>
          <SubmissionPage url={'http://localhost:4000/tasks/get-ca-orgtask'}/>  
    </div>
    )
}

export default OrgSubmission
