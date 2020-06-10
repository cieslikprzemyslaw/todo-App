import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            checked: false,
            date: new Date().toLocaleDateString(),
        }
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleChecked = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleClick = () => {
        const { text, checked } = this.state
        const addTask = this.props.addTask(text, checked);
        if (addTask) {
            this.setState({
                text: '',
                checked: false,
            })
        }
       
        console.log(addTask)
    }

    render() {
        return (
            <>
                    <label htmlFor="task-title">Task:</label>
                    <input
                        type="text"
                        name="task-title"
                        id="task-title"
                        onChange={this.handleText}
                    />
                    <label htmlFor="important">Important</label>
                    <input
                        type="radio"
                        name="important"
                        id="important"
                        value="important"
                        onChange={this.handleChecked}
                    />
                    <button onClick={this.handleClick}>Add</button>
            </>
        );
    }
}

export default AddTask;