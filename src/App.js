import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
    state = {
        names: ["Erin", "Ann", "Nichole", "Sharon", "Lisa", "Joey"]
    };
    // adds a new name to the names array in state in the App component
    addName = (name) => {
        const newNames = [name, ...this.state.names];
        this.setState({ names: newNames });
    };
    removeName = (clickedIndex) => {
        // to learn how the .filter method works, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        const filterCallback = (_, index) => index !== clickedIndex;
        const newNames = this.state.names.filter(filterCallback);
        // removeName method is calling this.setState with an updated data model
        this.setState({ names: newNames });
    };
    render() {
        return (
            <div className="App">
                <h1>Name Tag Generator</h1>
                {/* pass a reference from addName method to UserInput component reference removeName just below */}
                <UserInput addName={this.addName} />
                <NameTagList names={this.state.names} removeName={this.removeName} />
            </div>
        );
    }
}

export default App;
