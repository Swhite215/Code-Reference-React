import React from "react";
import FeatureOnePresentational from "./featureOnePresentational";
import {
    addSomething,
    editSomething,
    removeSomething
} from "../redux/actions/actionCreators";
import { connect } from "react-redux"; //Creates a HOC for that returns a new component with state and dispatch as props

class FeatureOneContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    /*Component Lifecycle - 12/03/2018
        Mounting
            1. Constructor
            2. getDerivedStateFromProps - RARE USAGE
            3. render
            4. componentDidMount - Network Requests
        Updating
            1. getDerivedStateFromProps
            2. shouldComponentUpdate(nextProps, nextState)
            3. render
            4. getsnapShotBeforeUpdate(prevProps, prevState)
            5. componentDidUpdate(prevProps, prevState) - Network Requests
        Unmounting
            1. componentWillUnmount
    */

    render() {
        return (
            <FeatureOnePresentational
                onChange={this.handleChange}
                name={this.state.text}
                statePropertyOne={this.props.statePropertyOne}
                statePropertyTwo={this.props.statePropertyTwo}
                addFunction={this.props.addSomething}
                editFunction={this.props.editSomething}
                removeFunction={this.props.removeSomething}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        storePropertyOne: state.storePropertyOne,
        storePropertyTwo: state.storePropertyTwo,
        pathname: state.router.location.pathname
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addSomething: something => {
            dispatch(addSomething(something));
        },
        editSomething: something => {
            dispatch(editSomething(something));
        },
        removeSomething: id => {
            dispatch(removeSomething(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeatureOneContainer);
