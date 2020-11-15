import React from 'react';

const withClassWithSomeLogic = (WrappedComponent, className) => {


    // use this type of wrapper method when need to implement some logic
    // based on passsed parameters
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}>

                </WrappedComponent>
            </div>
        )
    }

}

export default withClassWithSomeLogic;