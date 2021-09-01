import Task from './Task'

const Tasks = ({tasks, onDelete, onDoubleClick})=>{
    console.log('tasks length', tasks.length)
    if(tasks.length) return (
        <>
            {tasks.map(task=> 
                <Task key={task.id} task={task} onDelete={onDelete} onDoubleClick={onDoubleClick}/>
                )
            }

        </>
    ) 
    return (
    <h3>No tasks yet. Click on '<i>Add</i> ' to add new tasks.</h3>
    )
}

export default Tasks