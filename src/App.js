import React from "react";
import { hot } from "react-hot-loader"
import "./App.scss";
// import "./base.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

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