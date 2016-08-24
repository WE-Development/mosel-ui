export class JsonDao {

    constructor(path, callbacks = new Callbacks()) {
        this.path = path;
        this.callbacks = callbacks;
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