import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/config';
import './todo.style.scss';
import Form from './form.component';
import Loader from '../loader/loader.compoent';
import Tasks from './tasks.component';
import Done from './done.component';

class ToDo extends Component {
    state = {
        isLoading: false,
        todos: [],
        toggleDone: false
    }
    componentDidMount = () => {
        this.getTasks();
    }
    addTask = (task) => {
        axios({
            method: 'post',
            url: API_URL,
            params: {
                todo: task
            }
        }).then(response => {
            this.getTasks();
        })
    }
    getTasks = () => {
        this.setState({ isLoading: true });
        axios({
            method: 'get',
            url: API_URL
        }).then(response => {
            this.setState({
                isLoading: false,
                todos: response.data.data
            })
        })
    }
    markAsDone = (id) => {
        axios({
            method: 'post',
            url: API_URL + '/' + id,
            params: {
                _method: 'patch',
                checked: 1
            }
        }).then(response => {
            this.getTasks();
        })
    }
    deleteTask = (id) => {
        axios({
            method: 'delete',
            url: API_URL + '/' + id
        }).then(response => {
            this.getTasks();
        })
    }
    changeView = () => {
        this.setState({
            toggleDone: !this.state.toggleDone
        })
    }
    render() {
        return (<div className="todo">
            <h1>{this.state.toggleDone ? 'Done' : 'ToDo'}</h1>
            <Loader isLoading={this.state.isLoading} />

            {this.state.toggleDone ?
                <Done todos={this.state.todos} deleteTask={this.deleteTask} />
                :
                <>
                    <Form addTask={this.addTask} />
                    <Tasks todos={this.state.todos} markAsDone={this.markAsDone} />
                </>}
            <button onClick={this.changeView} className="change-view">{this.state.toggleDone ? 'Dodaj zadanie' : 'Pokażd zrobione taski'}</button>
        </div>);
    }
}

export default ToDo;