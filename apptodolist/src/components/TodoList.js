import React, {Component} from 'react';
import TodoRow from './TodoRow';

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.completeItem=this.completeItem.bind(this);
        this.removeItem=this.removeItem.bind(this);
    }

    removeItem (id){
        this.props.removeItem(id);
        return;
    }
    completeItem(id) {
        this.props.completeItem(id);
        return;
    }

    render() {
        let todoItems=this.props.todoItem.map(function (item) {
            console.log(item);
            return (
                <TodoRow task={item.task} key={item.id} idx={item.id} complete={item.complete} removeItem={this.removeItem} completeItem={this.completeItem}/>);
        },this);
        console.log(todoItems);
        return(
            <ul className="list-group">
                {todoItems}
            </ul>
        );
    }

}
export  default TodoList;