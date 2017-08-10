import React, {Component} from 'react';
import PropTypes from 'prop-types';

let todoListStyle = {
    display: "inline-block",
    width: "50%",
    background_color: "green",
}
let todoItemStyle = {
    width: "80%",
    display: "inline-block",
}

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.listItems = [];
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete (indexItem) {
        this.setState(this.props.todos.splice(indexItem, 1));
    }

    render() {
        this.listItemtodos = this.props.todos;
        console.log("list todo to render " + this.props.todos);
        return (
            <div className="list-group background" style={todoListStyle}>
                {this.props.todos.map(function(todo, index){
                    return (
                        <div key={index}>
                            <span>{todo.id}</span>
                            <a href="#" className="list-group-item" style={todoItemStyle} >{todo}</a>
                            <a href="#" onClick={() => this.handleDelete(index)}>X</a>
                        </div>
                    );
                }.bind(this))}
            </div>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.array
};

export  default TodoList;