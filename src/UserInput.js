import React, { Component } from "react";

class UserInput extends Component {
    state = {
        name: ""
    };
    updateName = (event) => this.setState({ name: event.target.value });
    // call addName method with the name to be added to the array of names
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addName(this.state.name);
        // initialize the state property names as an empty array. is how the lesson reads but I think it's wrong
        this.setState({ name: "" });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                {/* input element will display the value in state */}
                <input type="text" placeholder="Add a new name here..." value={this.state.name} onChange={this.updateName} />
                <input type="submit" value="Create Name Tag" />
            </form>
        );
    }
}

export default UserInput;