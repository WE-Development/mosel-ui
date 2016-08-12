import queryString from "query-string"

export class QueryParamManager {

    get(key) {
        return this.getAll()[key];
    }

    getAll() {
        return queryString.parse(location.search);
    }

    set(key, value) {
        var params = this.getAll();
        params[key] = value;

        if (window.history.replaceState) {
            var newLocation = window.location.protocol + "//" +
                window.location.host +
                window.location.pathname +
                '?' + queryString.stringify(params) +
                window.location.hash;
            window.history.replaceState(null, "", newLocation);
        }
    }
}