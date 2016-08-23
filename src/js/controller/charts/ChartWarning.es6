import {Controller} from "../controller.es6";

export class ChartWarning extends Controller {

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
                    text: 'Fruit Consumption'
                },
                yAxis: {
                    title: {
                        text: 'Fruit eaten'
                    }
                },
                series: [{
                    name: 'Jane',
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
                        {y: 216.4, marker: { fillColor: '#BF0B23', radius: 10 } }, 194.1, 95.6, 54.4]
                }, {
                    name: 'John',
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
                        { y: 190.4, color: '#BF0B23'}, 194.1, 95.6, 54.4]
                }]
            });
    }
}