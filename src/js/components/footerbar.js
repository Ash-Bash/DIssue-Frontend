import React from "react"

export default class FooterBar extends React.Component {
    
    render() {
        return <footer id="footerBar"> 
            <div id="contentWrapper">
                <div id="content" className="content-inline">
                    <label id="footerDevLabel" className="left"> Developed By SwankestSnake</label>
                    <ul id="footerNavLinksList" className="list-unstyled inline-list right">
                        <li><a id="link" className="unstyled-link" href="#">Trending</a></li>
                        <li><a id="link" className="unstyled-link" href="#">New</a></li>
                        <li><a id="link" className="unstyled-link" href="#">Hot</a></li>
                        <li><a id="link" className="unstyled-link" href="#">Promoted</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    }
}