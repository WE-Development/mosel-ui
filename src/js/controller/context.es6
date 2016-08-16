import {QueryParamManager} from "../util/queryParamManager.es6";

export class MoselUIContext {

    constructor() {
        this.debug = true;

        this.nodeInfoDao = null;
        this.queryParams = new QueryParamManager();
    }

}