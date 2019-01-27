import React, {Component} from 'react';

// only use error boundary for cases where it might fail and you do not have control over it
class ErrorBoundary extends Component{
    state = {
        hasHerror: false,
        errorMessage: ''
    }

    // Executed when ever a component throws and error and this is wrapping
    componentDidCatch = (error, info) => {
        this.setState({
            hasHerror: true,
            errorMessage: error
        });
    }

    render(){
        if(this.state.hasHerror){
            return <h5>{this.state.errorMessage}</h5>
        }
        else{
            // Whate ever we wrap inside 
            return this.props.children;
        }
    }
}

export default ErrorBoundary;