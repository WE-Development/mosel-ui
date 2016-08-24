import {LineChart} from "./LineChart.es6";
import * as $ from "jquery";

export class ChartCPU extends LineChart {

    constructor(info) {
        super(info);
    }

    buildOptions(options) {
        return $.extend(options, {
            title: {
                text: 'CPU usage'
            },
            series: [{
                name: 'Usage',
                data: this.info.CPU
            }]
        });
    }

    addNewInfo(info) {
        if (this.chart == null) {
            return;
        }

        info.CPU.forEach(data => {
            this.chart.series[0].addPoint(data);
            this.chart.series[0].removePoint(0);
        });
    }
}