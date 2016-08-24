import {LineChart} from "./LineChart.es6";

export class ChartDisk extends LineChart {

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
                    text: 'Disk usage'
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
                    data: this.info.Disk
                }]
            });
    }
}