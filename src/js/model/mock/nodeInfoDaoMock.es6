import {NodeInfoDao} from "../nodeInfoDao.es6";
import {Callbacks} from "../jsonDao.es6";
import Simplex from "perlin-simplex";

export class NodeInfoDaoMock extends NodeInfoDao {

    constructor() {
        super(null);
        this.i = Math.random();

        this.cpuSimplex = new Simplex();
        this.ramSimplex = new Simplex();
        this.diskSimplex = new Simplex();
    }

    get(callbacks = new Callbacks()) {
        this.getSince(
            new Date().getTime() - this.defaultSince,
            callbacks
        );
    }

    getSince(since, callbacks = new Callbacks()) {
        var res = {
            Time: Date.now(),
            Nodes: new Map([
                ["localhorst", this.getMockInfoObject(since)],
                ["hans", this.getMockInfoObject(since)],
                ["peter", this.getMockInfoObject(since)],
                ["srv0", this.getMockInfoObject(since)],
                ["srv9001", this.getMockInfoObject(since)],
                ["some_weired_host", this.getMockInfoObject(since)],
            ])
        };
        callbacks.done(res);
    }

    getMockInfoObject(since) {
        return {
            test: Math.round(Math.random() * 10),
            CPU: this.getPerlinSeries(since, this.cpuSimplex),
            RAM: this.getPerlinSeries(since, this.ramSimplex),
            Disk: this.getPerlinSeries(since, this.diskSimplex)
        };
    }

    getPerlinSeries(since, simplex = new Simplex()) {
        var series = [],
            now = new Date().getTime();

        if (since == null) {
            since = now - this.defaultSince;
        }

        //console.debug(now - since);
        while (since < now) {
            series.push([
                since,
                simplex.noise(since / (24 * 60 * 60 * 1000) * 2, 0)
            ]);

            //one measurement every second
            since += 60 * 1000;
        }

        //console.debug(series);
        return series;
    }
}