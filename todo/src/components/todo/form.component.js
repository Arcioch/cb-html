import React, { Component } from 'react';

class Form extends Component {
    state = {
        task: '',
        error: false
    }
    handleInputChange = (e) => {
        this.setState({
            task: e.target.value,
            error: false
        })
    }
    handleFormSubmit = (e) => {
        if (this.state.task.length < 4) {
            this.setState({
                error: true
            })
        } else {
            this.props.addTask(this.state.task);
            this.setState({
                task: ''
            })
        }
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" onChange={this.handleInputChange}
                    value={this.state.task} placeholder="Wprowadź zadanie i naciśnij ENTER" />
                {this.state.error && <p className="error">Popraw zadanie i naciśnij ENTER</p>}
            </form>
        );
    }
}

export default Form;