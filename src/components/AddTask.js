import React from 'react'
import {useState} from 'react'

const AddTask = ({addTask,tasks}) => {
    const [taskName, setTaskname] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    //get unique id
    const getId = ()=> {
        let id
        let flag = false
        while(true){
            id = Math.floor(Math.random()*10000)
            for(let i = 0; i<tasks.length; i++){
                if(tasks[i].id === id){
                    flag = true
                    break
                }
            }
            if(!flag){
                return id
            }
        }
    }

    //submit form handler
    const onSubmit = (event)=>{
        event.preventDefault()
        if(!taskName || !day){
            alert('Add both fields - Task and time')
            return
        }
        const task = {
            name: taskName,
            day: day,
            reminder: reminder
        }

        task.id = getId()

        //clear input fields
        setTaskname('')
        setDay('')
        setReminder(false)
    
        //add new task to the tasks list
        addTask(task)
    }

    return (
        <form className='add-from'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={taskName} onChange={event=> setTaskname(event.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day' value={day} onChange={event=>setDay(event.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} onChange={event=> setReminder(event.currentTarget.checked)}/>
            </div>
            <input className='btn btn-block' type='submit' value='Save Task' onClick={onSubmit}/>
        </form>
    )
}

export default AddTask
