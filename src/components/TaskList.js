import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.isActiveTask)
    const done = props.tasks.filter(task => !task.isActiveTask)
    const activeTasks = active.map(task => <Task
        key={task.id}
        task={task}
        delete={props.delete}
        change={props.change}
    />)
    const doneTasks = done.map(task => <Task
        key={task.id}
        task={task}
        delete={props.delete}
        change={props.change}
    />)

    return (
        <>
            <div className="active">
                <h1>tasks to do</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>task</th>
                            <th>date when start</th>
                            <th> Done Task </th>
                            <th> Delete </th>
                        </tr>

                        {activeTasks.length > 0 ? activeTasks : "You do not have any tasks"}
                    </tbody>
                </table>
            </div>
            <div className="done">
                <h1>Done tasks {done.length}</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>task</th>
                            <th>date when start</th>
                            <th> Date when finished </th>
                            <th> Delete </th>
                        </tr>

                        {doneTasks}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TaskList;
