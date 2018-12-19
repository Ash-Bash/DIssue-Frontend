

export default class URL {

    constructor () {

    }

    getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    loadPage(index) {
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
}