import React from "react";

// Custom Conponents
import TableView from "../components/tableview";
import TagItem from "../components/tags/tagitem";

export default class TrendingPage extends React.Component {

    render() {
        return <div id="trendingPage" className="page">
            <div id="contentWrapper">
                <div id="trendingTopBar">
                    <h1 id="trendingPageTitle" className="title p-title">Trending Page</h1>
                </div>
                <div id="trendingSplitView" className="splitView">
                    <div id="trendingLeftPanel" className="leftPanel sv-70">
                        <TableView />
                    </div>
                    <div id="trendingRightPanel" className="rightPanel sv-30">
                        <div id="tagList" className="container c-sidebarTag">
                            <label id="tagContainerLabel">Tags</label>
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                            <TagItem title="Test tag" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}