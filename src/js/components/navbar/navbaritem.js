import React from "react";

export default class NavBarItem extends React.Component {

    render() {
        return <li id="navBarItem">
            <a id="link" className="unstyled-link" href="#">{this.props.title}</a>
        </li>
    }
}