import React, {Component} from 'react';

//allow type and add todo
class AddTodoBar extends Component {
    constructor (props) {
        super(props);
        this.todoArr=["item 1", "item 2"],
        this.state=({
            value: ""
        });
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
        //console.log(this.state.value);
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.value === "") {
            return;
        } else {
            this.todoArr.push(this.state.value);
            console.log("added todos:" + this.todoArr);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        value={this.state.value}
                        placeholder="Add Todo..."
                        onChange={this.handleChange}/>
                    <input type="submit" value="ADD"/>
                </form>
                {/*<TodoList todos={this.todoArr}/>*/}
            </div>
        );
    }
}

//the list display todo
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.listItems = [];
    }

    onListItemsChanged () {

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
class TodoApp extends Component {
    render() {
        return (
            <div>
                <AddTodoBar/>
                <TodoList />
            </div>
        );
    }
}
export default AddTodoBar;