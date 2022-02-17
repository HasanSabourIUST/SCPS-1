import React, {Component, Fragment} from "react";
import './App.css'
import { Typography } from '@material-ui/core';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import SignIn from "./routes/Signin";
import HeaderComponent from "./routes/Dashboard/Header/HeaderComponent";
import LineChart from "./Components/LineChart";
import Register from './routes/Register.js'
import PrivateRoute from "./Components/common/PrivateRoute";
import {Provider} from "react-redux";
import store from "./store";


import {Login} from "./routes/Login";
import SendData from "./Components/SendData";
import {loadUser} from "./Actions/auth";

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    {/*<Routes>*/}
                    {/*    <Route path="/signin" element={<SignIn />} />*/}
                    {/*    <Route path="/login" element={<Login />} />*/}
                    {/*    <Route path="/" element={<HeaderComponent />} />*/}
                    {/*    <PrivateRoute path="/dashboard" element={<HeaderComponent />} />*/}
                    {/*    <Route path="/data" element={<SendData />} />*/}
                    {/*    /!*<Route path="/register">*!/*/}
                    {/*    /!*    <Register />*!/*/}
                    {/*    /!*</Route>*!/*/}
                    {/*</Routes>*/}
                    <Switch>
                        <PrivateRoute exact path="/" component={HeaderComponent} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/register" component={Register} />
                    </Switch>
                </BrowserRouter>

            </Provider>

        );
    }
}

export default App;