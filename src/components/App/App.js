import React from "react";
import { hot } from "react-hot-loader"
import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "..//Main/Main";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Footer />
        </div>
    )
}

export default App;