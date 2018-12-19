import React from "react";

// Custom Components
import CellTagItem from "../tags/celltagitem";

export default class TableViewCell extends React.Component {

    render() {

        return <div id={this.props.cellId} className="tableViewCell">
            <a id="linkArea" href="#">
                <div id="cellSplitView" className="splitView">
                    <div id="cellLeftPanel" className="leftPanel sv-35">
                        <div id="topContentPanel">
                            <div id="likesBadge" className="badge info">
                                <h5 id="likesValueText" className="valueText">0</h5>
                                <label className="titleLabel">Likes</label>
                            </div>
                            <div id="commentsBadge" className="badge info">
                                <h5 id="commentsValueText" className="valueText">0</h5>
                                <label className="titleLabel">Comments</label>
                            </div>
                            <div id="viewBadge" className="badge info">
                                <h5 id="viewValueText" className="valueText">0</h5>
                                <label className="titleLabel">Views</label>
                            </div>
                        </div>
                        <div id="bottomContentPanel">
                            <div id="viewBadge" className="badge info">
                                <h5 id="viewValueText" className="valueText">$0.00</h5>
                                <label className="titleLabel">Proceeds</label>
                            </div>
                        </div>
                    </div>
                    <div id="cellRightPanel" className="rightPanel sv-65">
                        <a id="titleLink" href="#">Main Title</a>
                        <div className="container c-tag">
                            <CellTagItem title="Test Tag" />
                            <CellTagItem title="Test Tag" />
                            <CellTagItem title="Test Tag" />
                            <CellTagItem title="Test Tag" />
                            <CellTagItem title="Test Tag" />
                        </div>
                        <div id="dateAndUserContainer" className="container date-User">
                            <label id="dateLabel" className="date-label">modified 31 secs ago</label>
                            <a id="userLink" className="user-link" href="#">SwankestSanke</a>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    }
} 