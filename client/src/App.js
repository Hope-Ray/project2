import React from "react";
import {Container} from "@material-ui/core";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";

const App = () => {
    return(
        <GoogleOAuthProvider clientId="432539687481-53516kvqe2n45d92a1qc7rkbl12np4br.apps.googleusercontent.com">
            <BrowserRouter>
                <Container maxWidth="lg">
                    <Navbar /> 
                    <Routes >
                        <Route path="/" exact element={<Home/>} />
                        <Route path="/auth" exact element={<Auth/>} />
                    </Routes >
                </Container>
            </BrowserRouter>
        </GoogleOAuthProvider>
    ); 
}

export default App;