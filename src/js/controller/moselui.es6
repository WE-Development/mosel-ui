import {Controller} from "./controller.es6";
import {Dashboard} from "./dashboard.es6";
import {MoselUIContext} from "./context.es6";

export class MoselUI extends Controller {

    constructor() {
        super('view/moselui.html');
    }

    init() {
        console.log('Init MoselUI');
        this.context = new MoselUIContext();

        this.pages = {
            dashboard: new Dashboard(),
            page2: new Controller("view/page2.html")
        };

        this.loadContent('dashboard');
    }

    loadContent(pageName) {
        if (pageName in this.pages) {
            console.debug(this.context);
            this.load(
                this.getChild('#content'), this.pages[pageName]);
        }
    }

    logIn() {
        console.log("login");
    }
}