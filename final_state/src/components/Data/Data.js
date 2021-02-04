import React from 'react';
import DataChild from "../DataChild/DataChild";

class Data extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "Data Flow + Props"
        };

        this.updateState = this.updateState.bind(this);
    }

    updateState() {
      this.setState({text: "Title: Data Flow + Props" })
    }

    render() {
      return (
        <DataChild title={this.state.text} handleUpdate={this.updateState} ></DataChild>
      );
    }
}

export default Data;