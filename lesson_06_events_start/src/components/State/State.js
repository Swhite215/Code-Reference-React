import React from "react";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "State",
      name: "TechART",
      members: 7,
      talented: true,
      location: {
        place: "Ford Credit",
        address: "1 American Rd, Dearborn, MI 48126",
      },
      roster: [
        {
          name: "Craig",
          role: "Tech Research Supervisor",
        },
        {
          name: "Josh",
          role: "Software Engineer",
        },
        {
          name: "Bryan",
          role: "Software Engineer",
        },
        {
          name: "Bhanu",
          role: "Software Engineer",
        },
        {
          name: "Susan",
          role: "Product Manager",
        },
        {
          name: "John",
          role: "Software Engineer" 
        },

        {
          name: "Ashalee",
          role: "Analyst",
        },
      ],
      counter: 0
    };

    let interval;
  }

  componentDidMount() {
      this.interval = setInterval(() => {
          this.setState({
              counter: this.state.counter + 1
          })
        // DONT DO THIS - this.state.counter++;
      }, 1000);

      // Example Immutably Modifying State Array Using Spread Operator ES6
      let newPerson = {
          name: "Spencer",
          role: "Software Engineer"
      }

      let newRoster = [...this.state.roster, newPerson];

      this.setState({
        roster: newRoster
      });

      // Example Immutably Modifying State Object Using Object.assign()
      let newObjectProperty = {
          place: "Ford Motor Credit Company"
      }

      let newLocation = Object.assign({}, this.state.location, newObjectProperty);

      this.setState({
          location: newLocation
      });
  }

  componentWillUmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>{this.state.text}</h2>
        <h3>Counter: {this.state.counter}</h3>
        <h3>Our team is {this.state.name}.</h3>
        <h3>Our team has {this.state.members} members.</h3>
        <h3>Are we talented? {this.state.talented === true ? "Yes we are." : null}.</h3>
        <h3>
          We work at {this.state.location.place} located at {this.state.location.address}.
        </h3>
        {this.state.roster.map((member) => {
            return <p key={member.name} >{member.name} is a {member.role}.</p>
        })}
      </div>
    );
  }
}

export default State;
