import React from "react";

export default class CellTagItem extends React.Component {

    render() {
        return <a id="tagLink" className="tag cell" href="#">{this.props.title}</a>
    }
}