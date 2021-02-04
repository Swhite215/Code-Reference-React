import React from "react";
import { getPeople } from "../../services/starwars-service";

class ClassRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Class Request",
      people: [],
    };
  }

  async componentDidMount() {
      try {
        let result = await getPeople();
        let people = result.results;
    
        this.setState({
          people
        });
      } catch(e) {
          console.log(e);
      }
  }

  async makePostRequest() {
    // Form Body
    // Make Request
    // use this.setState() if applicable
  }

  render() {
    return (
      <div>
        <h2>{this.state.text}</h2>
        {this.state.people.map((person) => {
            return <p key={person.name} >{person.name}</p>
        })}
      </div>
    );
  }
}

export default ClassRequest;
