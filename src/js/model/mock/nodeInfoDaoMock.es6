import {NodeInfoDao} from "../nodeInfoDao.es6";
import {Callbacks} from "../jsonDao.es6";

export class NodeInfoDaoMock extends NodeInfoDao {

    constructor() {
        super(null);
    }

    get(callbacks = new Callbacks()) {
        var res = {
            Time: Date.now(),
            Nodes: new Map([
                ["localhorst", {test: "2"}],
                ["hans", {test: "1"}],
                ["peter", {test: "4"}],
                ["srv0", {test: "3"}],
                ["srv9001", {test: "5"}],
                ["some_weired_host", {test: "7"}],
            ])
        };
        callbacks.done(res);
    }
}