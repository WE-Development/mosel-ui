import {LineChart} from "./LineChart.es6";
import * as $ from "jquery";

export class ChartRAM extends LineChart {

    constructor(info) {
        super('view/charts/defaultChart.html');
        this.info = info;
    }

    buildOptions(options) {
        return $.extend(options, {
            title: {
                text: 'RAM usage'
            },
            series: [{
                name: 'Usage',
                data: this.info.RAM
            }]
        });
    }

    addNewInfo(info) {
        if (this.chart == null) {
            return;
        }

        info.RAM.forEach(data => {
            this.chart.series[0].addPoint(data);
        });
    }
}