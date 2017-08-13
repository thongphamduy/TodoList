import React, {Component} from 'react';
import PropTypes from 'prop-types';

let inputStyle={
    fontSize: "larger"
}
const  initState = {
    value: ""
}
class TodoBar extends Component {
    constructor (props) {
        super(props);
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

    reset = () => {
        this.state = initState;
}
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.value);
        this.props.onItemSubmit(this.state.value);
        this.reset();
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={this.state.value}
                                placeholder="Add Todo..."
                                style={inputStyle}
                                onChange={this.handleChange}
                                className="form-control"/>
                        </div>
                        <div className="input-group-btn">
                            <input type="submit" value="ADD" className="btn btn-default"/>
                        </div>
                    </div>
                </form>
        );
    }
}

TodoBar.propTypes = {
    getTodo: PropTypes.func
};

export default TodoBar;