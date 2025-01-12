import React from 'react';
import { BrowserRouter ,Route} from 'react-router-dom';
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

function PrivateRoute({component:Component, auth, ...rest}) {
    return (
        <Route
            {...rest}
            render={props => {
                if(auth.isLoading){
                    return <h2>Loading...</h2>
                }else if(!auth.isAuthenticated){
                    // redirect to login
                    return <Redirect to="/login"/> ;
                }else{
                    return <Component {...props}/>
                }
            }}

        />
    );
}

const mapStateToProps = state => ({

   auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);