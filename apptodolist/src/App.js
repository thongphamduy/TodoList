import React, {Component} from 'react';
import TodoBar from "./components/TodoBar";
import TodoList from "./components/TodoList";

let container = {
    position: "fixed",
    right: "0",
    left: "0",
    display: "inline-block",
    width: "50%",
    margin: "50px auto"
}
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state=({
            todoItem: [
                {
                    id: "001",
                    task: "item 001",
                    complete: false
                },
                {
                    id: "002",
                    task: "item 002",
                    complete: false
                }
            ]
        });
        this.handleCompleteItem=this.handleCompleteItem.bind(this);
        this.handleItemSubmit=this.handleItemSubmit.bind(this);
        this.handleRemoveItem=this.handleRemoveItem.bind(this);
    }
    generateID () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    handleRemoveItem(id){
        this.state.todoItem=this.state.todoItem.filter((el)=>el.id !== id)
        this.setState(this.todoItem);
    }
    handleCompleteItem(id){
        let updatedList=this.state.todoItem;
        for(let i=0; i<updatedList.length;i++){
            if(updatedList[i].id===id) {
                updatedList[i].complete=!updatedList[i].complete;
                break;
            }
        }
        this.state.todoItem=updatedList;
        this.setState(this.todoItem);
    }
    handleItemSubmit(task) {
        let arr = this.state.todoItem;
        console.log("here I am " + task);
        let itemObj={
            id: this.generateID(),
            task: task,
            complete: false
        }
        console.log(itemObj);
        arr.push(itemObj);
        this.setState(arr);
        console.log(arr);
    }
    render() {
        return (
            <div style={container}>
                <TodoBar onItemSubmit={this.handleItemSubmit}/>
                <TodoList todoItem={this.state.todoItem} removeItem={this.handleRemoveItem} completeItem={this.handleCompleteItem}/>
            </div>
        );
    }
}


export default TodoApp;