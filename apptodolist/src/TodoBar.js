import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoBar extends Component {
    constructor (props) {
        super(props);
        this.todoArr=[],
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
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.value === "") {
            return;
        } else {
            this.todoArr.push(this.state.value);
            console.log("added todos:" + this.todoArr);
            this.props.getTodo(this.todoArr);
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
            </div>
        );
    }
}

TodoBar.propTypes = {
    getTodo: PropTypes.func
};

export default TodoBar;