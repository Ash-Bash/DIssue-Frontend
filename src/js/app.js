import React from "react";
import ReactDOM from "react-dom";

// Custom Components
import NavBar from "./components/navbar";
import FooterBar from "./components/footerbar";

class App extends React.Component {

    render() {
        return <div>
            <NavBar />
            <h1>Hello, World!</h1>
            <FooterBar />
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById("app"));