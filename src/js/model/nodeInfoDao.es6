import {JsonDao, Callbacks} from "./jsonDao.es6";

export class NodeInfoDao extends JsonDao {

    constructor(callbacks = new Callbacks()) {
        super('/rest/info', callbacks);
    }

    get(callbacks = null) {
        super.get(callbacks);
    }
}