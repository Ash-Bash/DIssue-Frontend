import React from "react";

// Custom Conponents
import TableView from "../components/tableview";
import TagItem from "../components/tags/tagitem";

export default class NewPage extends React.Component {

    render() {
        return <div id="newPage" className="page">
        <div id="contentWrapper">
            <div id="newTopBar">
                <h1 id="newPageTitle" className="title p-title">New Page</h1>
            </div>
            <div id="newSplitView" className="splitView">
                <div id="newLeftPanel" className="leftPanel sv-70">
                    <TableView />
                </div>
                <div id="newRightPanel" className="rightPanel sv-30">
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