import React from 'react'
import AddTaskPage from '../AddTask/AddTaskPage'

function OrganisationTask() {
    return (
        <div>
            <AddTaskPage url={'http://localhost:4000/tasks/org-find-task'}/>
        </div>
    )
}

export default OrganisationTask
