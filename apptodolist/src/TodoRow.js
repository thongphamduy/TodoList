import React, {Component} from 'react';

let taskStyle={
    display: "block",
    fontSize: "large",
    cursor: "pointer"
}
let btnStyle={
    display: "inline-block",
    float: "right"
}
class TodoRow extends Component {
    constructor (props) {
        super(props);
        this.completeItem=this.completeItem.bind(this);
        this.removeItem=this.removeItem.bind(this);
    }

    removeItem(e){
        e.preventDefault();
        console.log(this.props.idx);
        this.props.removeItem(this.props.idx);
    }
    completeItem(e){
        e.preventDefault();
        this.props.completeItem(this.props.idx);
    }
    render(){
        let rowClass= "list-group-item clearfix" ;
        console.log(this.props.idx);
        if(this.props.complete === true){
            rowClass += " list-group-item-success";
        }
        return(
            <li key={this.props.id} className={rowClass} style={taskStyle} onClick={this.completeItem}>{this.props.task}
                <div style={btnStyle}>
                    {/*<button type="button" className="btn btn-xs btn-success img-circle" onClick={this.completeItem}>&#x2713;</button>*/}
                    <button type="button" className="btn btn-xs btn-danger img-circle" onClick={this.removeItem}>&#xff38;</button>
                </div>
            </li>
        );
    }
}
export  default TodoRow;