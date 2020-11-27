import React from 'react';


const authContext = React.createContext({
    
    // these are just defaults 
    // for example a default isLoggedin
    //a dn a default for loginHandler
    // which is a anonymous function
    isLoggedin: false,
    loginHandler: () => {}
});


export default authContext;