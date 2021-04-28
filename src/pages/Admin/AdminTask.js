import React from 'react'
import AddTaskPage from '../AddTask/AddTaskPage'
function AdminTask() {
    return (
        <div>
            <AddTaskPage url={'http://localhost:4000/tasks/get-admin-task'} />
        </div>
    )
}

export default AdminTask
