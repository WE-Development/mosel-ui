import {Controller} from "../controller.es6";
import Highcharts from "highcharts"

export class ChartCPU extends Controller {

    constructor(info) {
        super('view/charts/defaultChart.html');
        this.info = info;
    }

    init() {
        var that = this;
        var index = super.getChild("#chart")
            .highcharts({
                chart: {
                    type: 'line',
                    events : {
                        load: (function () {
                            that.chartLoad(this);
                        })
                    }
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
            }).data('highchartsChart');

        this.chart = Highcharts.charts[index];
    }

    chartLoad(chart) {
        var series = chart.series[0];
        setInterval(function () {
            var x = (new Date()).getTime(), // current time
                y = Math.round(Math.random() * 100);
            series.addPoint([x, y], true, true);
        }, 1000);
    }
}