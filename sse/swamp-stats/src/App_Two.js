import React, { useState, useEffect } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nests: []
    }
  }

  componentDidMount() {
    const events = new EventSource('http://localhost:3000/events');

    events.onmessage = (event) => {
      console.log(event);

      const parsedData = JSON.parse(event.data);

      let newNests = this.state.nests.concat(parsedData);

      this.setState({nests: newNests})
    }
  }

  render(){
    return (
      <table className="stats-table">
        <thead>
          <tr>
            <th>Momma</th>
            <th>Eggs</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.nests.map((nest, i) =>
              <tr key={i}>
                <td>{nest.momma}</td>
                <td>{nest.eggs}</td>
                <td>{nest.temperature} ℃</td>
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }
}

export default App;
