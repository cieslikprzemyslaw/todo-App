import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {

  counter = 10;

  state = {
    tasks: [
      {
        id: 0,
        text: "zagrac wreszcie w wiedzmina 3",
        date: "2020-02-15",
        finishDate: null,
        isImportantTask: false,
        isActiveTask: true,
      },
      {
        id: 1,
        text: "zagrac wreszcie w dsdd 3",
        date: "2020-02-15",
        finishDate: null,
        isImportantTask: true,
        isActiveTask: true,
      },
      {
        id: 3,
        text: "zagrac samemu w wiedzmina 3", //input text
        date: "2020-02-15", //input value
        finishDate: null,  //input value
        isImportantTask: false,
        isActiveTask: true,
      },
    ]
  }

  changeTaskStatus = (id) =>{
    // console.log("changed"+id)
    const tasks = [...this.state.tasks];
    tasks.forEach( task => {
      if(task.id === id){
        task.isActiveTask = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
    // console.log(tasks)
  }

  deleteTask = (id) => {
    console.log("deleted"+id)
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1)
    this.setState({
      tasks
    })
  }

  addTask = (text, important) =>{
    const task = {
        id: this.counter,
        text,
        date: new  Date().toLocaleString(new Date().getTime()),
        finishDate: null,
        isImportantTask: important,
        isActiveTask: true,
    }
    this.counter++

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    // console.log(this.counter, task)
    // e.preventDefault();
    return true
    
  }

  render() {
    return (
      <div className="App">
        <AddTask 
        addTask={this.addTask}
        />
        <TaskList 
        tasks={this.state.tasks}
        delete={this.deleteTask}
        change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
