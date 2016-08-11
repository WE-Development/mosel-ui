import {Controller} from "./controller.es6";
import {Dashboard} from "./dashboard.es6";

export class MoselUI extends Controller {

    constructor(container) {
        super(container, 'view/moselui.html');
    }

    init() {
        console.log('Init MoselUI');
        var content = super.getChild('#content');

        this.pages = {
            dashboard: new Dashboard(content),
            page2: new Controller(content, "view/page2.html")
        };

        this.loadContent('dashboard');
    }

    loadContent(pageName) {
        if (pageName in this.pages) {
            this.pages[pageName].load();
        }
    }

    logIn() {
        console.log("login");
    }
}