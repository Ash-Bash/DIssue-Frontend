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

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

class App extends React.Component {

    render() {

        var renderedPage = null
        if (getUrlVars()["pageindex"] == 0) {
            renderedPage = <TrendingPage />;
        } else if (getUrlVars()["pageindex"] == 1) {
            renderedPage = <NewPage />;
        }  else if (getUrlVars()["pageindex"] == 2) {
            renderedPage = <HotPage />;
        }  else if (getUrlVars()["pageindex"] == 3) {
            renderedPage = <PromotedPage />;
        } 

        return <div id="mainDiv">
            <NavBar selectedIndex={getUrlVars()["pageindex"]}/>
            {renderedPage}
            <FooterBar />
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById("app"));