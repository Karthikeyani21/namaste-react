import React from "react";
import UserContext from '../utils/UserContext';

class UserClass extends React.Component {

    // to access props inside constructor
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        // called once after the component gets rendered in browser
    }

    componentWillUnmount(){
        // called once the component is removed from the DOM
    }


    render() {
        const {count} = this.state;
        return (
            <>
                {/* accessing context from class component */}
                <UserContext.Consumer>
                                {(value) => (<h1 className="font-bold">{value.loggedInUser}</h1>)}
                </UserContext.Consumer>
                <h3>Count : {this.state.count}</h3>
                <button onClick={() => {
                    this.setState({
                       count: this.state.count + 1
                    })
                }}>increment</button>
                {/* <h3>Count : {count}</h3> */}
                <h1>from class based component</h1>
                {this.props.name}
            </>
        )
    }
}

export default UserClass;