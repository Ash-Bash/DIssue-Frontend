import React from "react";

// Custom Components
import NavBarItem from "./navbar/navbaritem";
import NavBarActionItem from "./navbar/navbaractionitem";

export default class NavBar extends React.Component {

    render() {

        return <nav id="mainNavBar"> 
            <div id="contentWrapper">
                <div id="navBarContent" className="content-inline">
                    <img id="webIconImg" src="./assets/img/dissueText_Icon_30px.png" />
                    <ul id="navBarItemList" className="list-unstyled inline-list">
                        <NavBarItem title="Trending" selected="selected" />
                        <NavBarItem title="New" />
                        <NavBarItem title="Hot" />
                        <NavBarItem title="Promoted" />
                    </ul>
                    <ul id="navBarActionItemList" className="list-unstyled inline-list right">
                        <NavBarActionItem title="Login" actionStyle="signIn-Action" />
                        <NavBarActionItem title="Sign Up" actionStyle="signUp-Action" />
                    </ul>
                </div>
            </div>
        </nav>
    }
} 