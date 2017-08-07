import React, {Component} from 'react';

//allow type and add todo
class AddTodoBar extends Component {
    constructor (props) {
        super(props);
        this.todoArr=[""],
        this.state=({
            value: "",
            //todoArr: []
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
            console.log(this.todoArr);
            //handle display todo row
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
                <TodoList todos={this.todoArr}/>
            </div>
        );
    }
}

//the list display todo
class TodoList extends Component {
    
    render() {
        //let todos = this.props.todos;
        console.log("hello from todolist");
        console.log(this.props.todos);
        return (
            <form>
                {this.props.todos.map(function(todo) {
                    <p>
                        <input type="checkbox"/>
                        {' '}
                        {todo}
                    </p>     
                    console.log("render done");        
                })}      
            </form>
        );
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