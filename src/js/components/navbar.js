import React from "react";

// Custom Components
import NavBarItem from "./navbar/navbaritem";
import NavBarActionItem from "./navbar/navbaractionitem";

export default class NavBar extends React.Component {

    render() {
        
        var index = this.props.selectedIndex;
        var trendingItemSelected = "selected";
        var newItemSelected = "";
        var hotItemSelected = "";
        var promotedItemSelected = "";

        if (index == 0) {
            trendingItemSelected = "selected";
            newItemSelected = "";
            hotItemSelected = "";
            promotedItemSelected = "";
        } else if (index == 1) {
            trendingItemSelected = "";
            newItemSelected = "selected";
            hotItemSelected = "";
            promotedItemSelected = "";
        } else if (index == 2) {
            trendingItemSelected = "";
            newItemSelected = "";
            hotItemSelected = "selected";
            promotedItemSelected = "";
        } else if (index == 3) {
            trendingItemSelected = "";
            newItemSelected = "";
            hotItemSelected = "";
            promotedItemSelected = "selected";
        } 

        return <nav id="mainNavBar"> 
            <div id="contentWrapper">
                <div id="navBarContent" className="content-inline">
                    <img id="webIconImg" src="./assets/img/dissueText_Icon_30px.png" />
                    <ul id="navBarItemList" className="list-unstyled inline-list">
                        <NavBarItem title="Trending" index="0" selected={trendingItemSelected} />
                        <NavBarItem title="New" index="1" selected={newItemSelected} />
                        <NavBarItem title="Hot" index="2" selected={hotItemSelected} />
                        <NavBarItem title="Promoted" index="3" selected={promotedItemSelected} />
                    </ul>
                    <ul id="navBarActionItemList" className="list-unstyled inline-list right">
                        <div id="newUserActionsSection" className="vis-show">
                            <NavBarActionItem title="Login" actionStyle="signIn-Action" />
                            <NavBarActionItem title="Sign Up" actionStyle="signUp-Action" />
                        </div>
                        <div id="existingUserActionsSection" className="vis-hide">

                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    }
} 