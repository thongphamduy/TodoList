import React, {Component} from 'react';
import TodoBar from "./TodoBar";
import TodoList from "./TodoList";


class TodoApp extends Component {
    constructor() {
        super();
        this.state=({
            todos: []
        });
    }

    getListTodoFromInput (updatedList) {
        //do something
        this.setState ({
            todos: updatedList
        });
    }
    render() {
        return (
            <div>
                <TodoBar getTodo={this.getListTodoFromInput.bind(this)}/>
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default TodoApp;