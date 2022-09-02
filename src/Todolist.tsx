import React, {useState} from 'react';
import {FilterType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(taskID:number)=> void
    filterTask:(filterValue: FilterType)=> void
}

export function Todolist(props: PropsType) {

    // const [filterValue, setFilterValue] = useState('All')
    //
    // let filteredTasks = tasks1
    //
    // if (filterValue === 'Active') {
    //     filteredTasks = tasks1.filter(el => !el.isDone)
    // }
    //
    // if (filterValue === 'Completed') {
    //     filteredTasks = tasks1.filter(el => el.isDone)
    // }
    //
    // const removeTask = (taskID: number) => {
    //     setTask1(tasks1.filter((el)=> el.id !== taskID))
    // }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((el, index) => {
                return (
                    <li key={el.id}>
                        <button onClick={(event)=>props.removeTask(el.id)}>x</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
            {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
            {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
            {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
        </ul>
        <div>
            <button onClick={(event)=>props.filterTask('All')}>All</button>
            <button onClick={(event)=>props.filterTask('Active')}>Active</button>
            <button onClick={(event)=>props.filterTask('Completed')}>Completed</button>
        </div>
    </div>
}
