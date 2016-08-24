export class JsonDao {

    constructor(path, callbacks = new Callbacks()) {
        this.path = path;
        this.callbacks = callbacks;
        //this.defaultSince = 24 * 60 * 60 * 1000;
        this.defaultSince = 60 * 60 * 1000;
    }

    get(callbacks = null) {

        var callbacksToUse;

        if (callbacks != null) {
            callbacksToUse = callbacks;
        } else {
            callbacksToUse = this.callbacks;
        }

        $.getJSON(this.path)
            .done(data => callbacksToUse.done(data))
            .fail((jqxhr, textStatus, error) => callbacksToUse.fail(jqxhr, textStatus, error))
            .always(() => callbacksToUse.always());
    }

}

export class Callbacks {

    done() {
    }

    fail() {
    }

    always() {
    }
}