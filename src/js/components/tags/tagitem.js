import React from "react";

export default class TagItem extends React.Component {

    render() {
        return <a id="tagLink" className="tag standard" href="#">{this.props.title}</a>
    }
}