import React from 'react';
import PropTypes from 'prop-types';

class DataChild extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    // Destructure Props ES6
    render({title, handleUpdate} = this.props) {

      return (
          <div>
            <h2>{title}</h2>
            <button onClick={handleUpdate}>Update State</button>
          </div>
      );
    }
}

DataChild.propTypes = {
    title: PropTypes.string.isRequired,
    handleUpdate: PropTypes.func.isRequired,
    name: PropTypes.string
}

export default DataChild;


