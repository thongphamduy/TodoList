import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.listItems = [];
    }

    render() {
        this.listItems = this.props.todos;
        console.log("list todo to render " + this.listItems);
        return (
            <ul>
                {this.props.todos.map(function(todo){
                    return <li key={todo.toString()}>{todo}</li>;
                })}
            </ul>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.array
};

export  default TodoList;