import {LineChart} from "./LineChart.es6";
import * as $ from "jquery";

export class ChartDisk extends LineChart {

    constructor(info) {
        super(info);
    }

    buildOptions(options) {
        return $.extend(options, {
            title: {
                text: 'Disk usage'
            },
            series: [{
                name: 'Usage',
                data: this.info.Disk
            }]
        });
    }

    addNewInfo(info) {
        if (this.chart == null) {
            return;
        }

        info.Disk.forEach(data => {
            this.chart.series[0].addPoint(data);
            this.chart.series[0].removePoint(0);
        });
    }
}