import React from 'react';

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "Events",
            name: "",
            buttons: [{
                name: "Like"
            }, {
                name: "Cheer"
            }, {
                name: "Thank You"
            }],
            formData: {
                name: "",
                age: "",
                address: ""
            }
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        // Use event.target.value to get element value easily
        this.setState({name: e.target.value});
    }

    handleButtonClick(id) {
        console.log("The button ID is: ", id);
    }
    
    handleChange(e) {
        console.log(e.target.value);
        console.log(e.target.name);

        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.formData.name} is ${this.state.formData.age} and works at ${this.state.formData.address}`);

        // Make Network Request Here

        this.setState({
            formData: {}
        });
    }

    render() {
      return (
          <div>
            <h2>{this.state.text}</h2>
            {this.state.name != "" ? <h3>My name is {this.state.name}.</h3>: null}
            <input type="text" name="name" onInput={this.handleInput} />
            {this.state.buttons.map((button, index) => {
                return <button key={index} onClick={this.handleButtonClick.bind(this, index)}>{button.name}</button>
            })}

            <hr></hr>
            <form>
                <label type="text">Name: <input type="text" name="name" value={this.state.formData.name || ""} onChange={this.handleChange} /></label>
                <label type="number">Age: <input type="number" name="age" value={this.state.formData.age || ""} onChange={this.handleChange} /></label>
                <label type="text">Address: <input type="text" name="address" value={this.state.formData.address || ""} onChange={this.handleChange} /></label>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
      );
    }
}

export default Events;