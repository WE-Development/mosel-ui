import $ from "jquery"
import {Controller} from "./controller.es6";
import {Dashboard} from "./dashboard.es6";
import {MoselUIContext} from "./context.es6";
import {NodeInfoDao} from "../model/nodeInfoDao.es6";
import {NodeInfoDaoMock} from "../model/mock/nodeInfoDaoMock.es6";

export class MoselUI extends Controller {

    constructor() {
        super('view/moselui.html');
    }

    init() {
        console.log('Init MoselUI');
        var context = new MoselUIContext();

        if (context.debug) {
            context.nodeInfoDao = new NodeInfoDaoMock();
        } else {
            context.nodeInfoDao = new NodeInfoDao();
        }

        this.context = context;
        this.pages = {
            dashboard: new Dashboard(),
            page2: new Controller("view/page2.html")
        };

        var pageName = null;
        if (typeof window.location.hash === 'undefined' ||
            window.location.hash === '') {
            pageName = 'dashboard';
        } else {
            pageName = window.location.hash
                .replace('#', '');
        }

        this.loadContent(pageName);
    }

    loadContent(pageName) {
        window.location.hash = pageName;

        if (pageName in this.pages) {
            this.load(
                this.getChild('#content'), this.pages[pageName]);
        }
    }

    logIn() {
        console.log("login");
    }
}