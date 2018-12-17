import React from "react";
import ReactDOM from "react-dom";

// Custom Components
import NavBar from "./components/navbar";
import FooterBar from "./components/footerbar";

// Pages
import TrendingPage from "./pages/trendingPage";
import NewPage from "./pages/newPage";
import HotPage from "./pages/hotPage";
import PromotedPage from "./pages/promotedPage";

class App extends React.Component {

    render() {
        return <div id="mainDiv">
            <NavBar />
            <TrendingPage />
            <FooterBar />
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById("app"));