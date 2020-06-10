import React from 'react';

const Task = (props) => {

    const important = {
        color: 'red',
    }

    const { text, date, id, isActiveTask, isImportantTask, finishDate } = props.task

    if (isActiveTask) {
        return (
            <>
                <tr>
                    <td style={isImportantTask ? important : null}>{text}</td>
                    <td>{date}</td>
                    <td><button onClick={() => props.change(id)}>Done</button></td>
                    <td><button onClick={() => props.delete(id)}>Delete</button></td>
                </tr>
            </>
        );
    } else {
        const finishedTime = new Date(finishDate).toLocaleDateString();
        return (
            <>
                <tr>
                    <td>{text}</td>
                    <td>{date}</td>
                    <td>{finishedTime}</td>
                    <td><button onClick={() => props.delete(id)}>Delete</button></td>
                </tr>
            </>
        );
    }
}

export default Task;