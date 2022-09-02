import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "ReactJS2", isDone: false }
    ]

    const removeTask = () => {
        console.log('call function')
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks1}
                      removeTask={removeTask}
            />
        </div>
    );
}

export default App;
