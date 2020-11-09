import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: '',
    }

    componentDidCatch = (error, info) => {

        this.setState(
            {
                hasError: true,
                errorMessage: error,
            }
        )

    }

    render() {
        if (this.state.hasError){
            console.log('error message: ', this.state.errorMessage);
            return (
                    <div>{this.state.errorMessage}</div>
                   )
        }
        else{

            // this is just returning the wrapped component
            // if no error occured, in this case 
            // this.props.children is the Person component
            // which is wrapped by this higher level component

            // and 
            return ( this.props.children )
        }

    }
}


export default ErrorBoundary;