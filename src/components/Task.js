import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onDoubleClick}) => {
    return (
        <div onDoubleClick={()=>onDoubleClick(task.id)} className={`task ${task.reminder? 'reminder' : ''}`}>
            <h3>
                {task.name} 
                <FaTimes style={{color:'red'}} onClick={()=>onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
