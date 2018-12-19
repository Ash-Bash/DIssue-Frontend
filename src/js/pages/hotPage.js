import React from "react";

// Custom Conponents
import TableView from "../components/tableview";
import TagItem from "../components/tags/tagitem";

export default class HotPage extends React.Component {

    render() {
        return <div id="hotPage" className="page">
                <div id="contentWrapper">
                <div id="hotTopBar">
                    <h1 id="hotPageTitle" className="title p-title">Hot Page</h1>
                </div>
                <div id="hotSplitView" className="splitView">
                    <div id="hotLeftPanel" className="leftPanel sv-70">
                        <TableView />
                    </div>
                    <div id="hotRightPanel" className="rightPanel sv-30">
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