import React from "react";

// Custom Components
import TableViewCell from "./tableview/tableviewcell";

export default class TableView extends React.Component {

    render() {

        return <div id="tableView">
            <TableViewCell cellId="TestCell1" />
            <TableViewCell cellId="TestCell1" />
            <TableViewCell cellId="TestCell1" />
            <TableViewCell cellId="TestCell1" />
        </div>
    }
} 