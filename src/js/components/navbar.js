import React from "react";

// Custom Components
import NavBarItem from "./navbar/navbaritem";

export default class NavBar extends React.Component {

    render() {

        return <nav id="mainNavBar"> 
            <div id="contentWrapper">
                <div id="navBarContent" className="content-inline">
                    <img id="webIconImg" src="" />
                    <ul id="navBarItemList" className="list-unstyled inline-list">
                        <NavBarItem title="Trending" />
                        <NavBarItem title="New" />
                        <NavBarItem title="Hot" />
                        <NavBarItem title="Promoted" />
                    </ul>
                </div>
            </div>
        </nav>
    }
} 