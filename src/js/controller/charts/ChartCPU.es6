import {Controller} from "../controller.es6";

export class ChartCPU extends Controller {

    constructor(info) {
        super('view/charts/defaultChart.html');
        this.info = info;
    }

    init() {
        super.getChild("#chart")
            .highcharts({
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'CPU usage'
                },
                yAxis: {
                    title: {
                        text: 'More is bad'
                    }
                },
                xAxis: {
                    type: 'datetime'
                },
                series: [{
                    name: 'Usage',
                    data: this.info.CPU
                }]
            });
    }
}