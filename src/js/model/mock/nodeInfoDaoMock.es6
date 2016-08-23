import {NodeInfoDao} from "../nodeInfoDao.es6";
import {Callbacks} from "../jsonDao.es6";
import perlin from "perlin-noise";

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
            noise = perlin.generatePerlinNoise(1000, 1, {
                amplitude: 100,
                persistence: 0.05,
                octaveCount: 5
            });

        var date = new Date();
        for (var i = 0; i < 1000; i++) {
            series.push([
                date.getTime() + 2 * 1000 * i,
                noise[i]
            ]);
        }

        return series
    }
}