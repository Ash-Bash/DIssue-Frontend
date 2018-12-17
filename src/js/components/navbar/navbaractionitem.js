import React from "react";

export default class NavBarActionItem extends React.Component {

    render() {
        return <li id="navBarActionItem">
            <a id="link" className={ 'unstyled-link ' + this.props.actionStyle } href="#">{this.props.title}</a>
        </li>
    }
}