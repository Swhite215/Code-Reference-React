import React from 'react';

class Lifecycle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "This is the Lifecycle Component - Open the developer console to see Lifecycle methods."
        };
    }

    componentDidMount() {
        console.log("Component Has Mounted.")
    }

    componentDidUpdate() {
        console.log("Component Has Updated.")
    }
    
    componentWillUnmount() {
        console.log("Component Is Being Removed.")
    }

    render() {
      return (
        <h2>{this.state.text}</h2>
      );
    }
}

export default Lifecycle;