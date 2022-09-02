import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {


    let [tasks1, setTask1] = useState([
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false},
            {id: 4, title: "ReactJS2", isDone: false}
        ]
    )


    const [filterValue, setFilterValue] = useState('All')

    let filteredTasks = tasks1

    if (filterValue === 'Active') {
        filteredTasks = tasks1.filter(el => !el.isDone)
    }

    if (filterValue === 'Completed') {
        filteredTasks = tasks1.filter(el => el.isDone)
    }

    const removeTask = (taskID: number) => {
        setTask1(tasks1.filter((el)=> el.id !== taskID))
    }

    const filterTask = (filterVal: string) => {
    setFilterValue(filterVal)
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      filterTask={filterTask}
            />
        </div>
    );
}

export default App;
