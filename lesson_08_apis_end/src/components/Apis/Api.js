import React from 'react';
import ClassRequest from "../ClassRequest/ClassRequest";
import FunctionalRequest from "../FunctionalRequest/FunctionalRequest";

class Apis extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "Apis"
        };
    }

    render() {
      return (
          <div>
              <h2>{this.state.text}</h2>
              <ClassRequest></ClassRequest>
              <FunctionalRequest></FunctionalRequest>
          </div>
      );
    }
}

export default Apis;