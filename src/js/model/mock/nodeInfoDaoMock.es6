import {NodeInfoDao} from "../nodeInfoDao.es6";
import {Callbacks} from "../jsonDao.es6";
import Simplex from "perlin-simplex";

export class NodeInfoDaoMock extends NodeInfoDao {

    constructor() {
        super(null);
        this.i = Math.random();
    }

    get(callbacks = new Callbacks()) {
        var res = {
            Time: Date.now(),
            Nodes: new Map([
                ["localhorst", NodeInfoDaoMock.getMockInfoObject()],
                ["hans", NodeInfoDaoMock.getMockInfoObject()],
                ["peter", NodeInfoDaoMock.getMockInfoObject()],
                ["srv0", NodeInfoDaoMock.getMockInfoObject()],
                ["srv9001", NodeInfoDaoMock.getMockInfoObject()],
                ["some_weired_host", NodeInfoDaoMock.getMockInfoObject()],
            ])
        };
        callbacks.done(res);
    }

    static getMockInfoObject() {
        return {
            test: Math.round(Math.random() * 10),
            CPU: this.getPerlinSeries(),
            RAM: this.getPerlinSeries(),
            Disk: this.getPerlinSeries()
        };
    }

    static getPerlinSeries() {
        var series = [],
            simplex = new Simplex(),
            rnd = Math.random() * 10;
        var date = new Date();
        for (var i = 0; i < 3000; i++) {
            series.push([
                date.getTime() + 2 * 1000 * i,
                simplex.noise(rnd + i / 300, 0)
            ]);
        }

        return series
    }
}