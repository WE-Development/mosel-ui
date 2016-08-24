import {AbstractChart} from "./AbstractChart.es6";

export class LineChart extends AbstractChart {

    constructor(info) {
        super('view/charts/defaultChart.html');
        this.info = info;
        this.chart = null;
    }

    init() {
        var that = this,
            index = super.getChild("#chart")
                .highcharts(
                    this.buildOptions({
                        chart: {
                            type: 'line',
                            events: {
                                load: (function () {
                                    that.chart = this;
                                    that.chartLoad();
                                })
                            }
                        },
                        yAxis: {
                            title: {
                                text: 'More is bad'
                            }
                        },
                        xAxis: {
                            type: 'datetime'
                        }
                    })
                ).data('highchartsChart');
    }

    buildOptions(options) {
        return options;
    }

    chartLoad() {
    }
}