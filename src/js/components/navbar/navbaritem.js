import React from "react";

function loadURL(index) {
    var url = new URL(document.URL);
    var query_string = url.search;
    var search_params = new URLSearchParams(query_string); 
    // new value of "id" is set to "101"
    search_params.set('pageindex', index);
    // change the search property of the main url
    url.search = search_params.toString();
    // the new url string
    var new_url = url.toString();
    return new_url;
}

export default class NavBarItem extends React.Component {

    changePage(index) {
        window.history.pushState({ path: loadURL(index) }, '', loadURL(index));
    }

    render() {
        return <li id="navBarItem">
            <a id="link" className={'unstyled-link ' + this.props.selected } href={loadURL(this.props.index)}>{this.props.title}</a>
        </li>
    }
}