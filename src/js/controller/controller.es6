import $ from "jquery";

export class Controller {

    constructor(view) {
        this.view = view;
    }

    init() {
        console.debug("Init", this)
    }

    load(child, controller) {
        if (!(child instanceof $)) {
            child = $(child);
        }

        child.ready(() => {

            var childController = child.data().controller;
            if (childController instanceof Controller) {
                childController.destroy();
                child.removeAttr('data-container');
            }

            //correlate controller and container
            child.data({
              controller: controller
            });
            controller.container = child;

            child.load(controller.view, () => controller.init());
            child.attr('data-container', '');
        });
    }

    destroy() {
        console.debug("Destroy", this)
    }

    getChild(selector) {
        return this.getChildren(selector).first();
    }

    getChildren(selector) {
        if (!(this.container instanceof $)) {
            throw new Error("Controller initialized without container");
        }

        var c = this.container;
        return c.find(selector)
            .not(c.find(':data(controller)').find(selector));
    }
}
