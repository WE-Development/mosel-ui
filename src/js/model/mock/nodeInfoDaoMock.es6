import {NodeInfoDao} from "../nodeInfoDao.es6";
import {Callbacks} from "../jsonDao.es6";
import Simplex from "perlin-simplex";
import {moselConfig} from "../../environment.es6";

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
            new Date().getTime() - moselConfig.defaultSince,
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

        simplex.i = simplex.i || 0;

        if (since == null) {
            since = now - this.defaultSince;
        }

        var interval = Math.round(
            moselConfig.defaultSince / moselConfig.maxPoints);

        while (since < now) {
            var noise = simplex.noise(simplex.i / (5 * Math.pow(10, 5)), 0);
            simplex.i++;

            //noise = Math.abs(noise);
            noise = noise + 1 / 2;
            noise *= 100;
            noise = Math.min(noise, 100);
            noise = Math.max(noise, 0);
            series.push([since, noise]);

            //interval of measurements
            //since += 60 * 1000;
            since += interval;
        }

        //console.debug(series.length);
        return series;
    }
}