import React from "react";

// Custom Conponents
import TableView from "../components/tableview";
import TagItem from "../components/tags/tagitem";

export default class PromotedPage extends React.Component {

    render() {
        return <div id="promotedPage" className="page">
                <div id="contentWrapper">
                <div id="promotedTopBar">
                    <h1 id="promotedPageTitle" className="title p-title">Promoted Page</h1>
                </div>
                <div id="newSplitView" className="splitView">
                    <div id="promotedLeftPanel" className="leftPanel sv-70">
                        <TableView />
                    </div>
                    <div id="promotedRightPanel" className="rightPanel sv-30">
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