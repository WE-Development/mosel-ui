import {Controller} from "./controller.es6";
import {MoselUIContext} from "./context.es6";

export class Dashboard extends Controller {

    constructor() {
        super("view/dashboard.html");
    }

    init() {
        console.log("Dashboard init - Context " + (this.context instanceof MoselUIContext), this.context);

        var nodeInfo = this.context.nodeInfoDao;
        nodeInfo.get({
            done: (data) => this.renderNodes(data)
        });

    }

    destroy() {
        console.log("Dashboard destroy");
    }

    renderNodes(data) {
        var nodesContainer = this.getChild('#nodes');

        for (let entry of data.Nodes) {
            var name = entry[0];
            var info = entry[1];

            nodesContainer.append('<h3>' + name + '</h3>');

            var infoContainer = $('<div></div>');
            infoContainer.appendTo(nodesContainer);

            this.load(infoContainer, new NodeCharts(info));
        }

        nodesContainer.accordion({
            active: 0,
            heightStyle: 'content'
        });
    }
}

class NodeCharts extends Controller {

    constructor(info) {
        super('view/nodeCharts.html');
        this.info = info;
    }

    init() {
        this.load(this.getChild('#chart1'), new NodeChart());
        this.load(this.getChild('#chart2'), new NodeChart());
        this.load(this.getChild('#chart3'), new NodeChart());
        this.load(this.getChild('#chart4'), new NodeChart());
        this.load(this.getChild('#chart5'), new NodeChart());
        this.load(this.getChild('#chart6'), new NodeChart());
    }
}

class NodeChart extends Controller {

    constructor() {
        super('view/nodeChart.html')
    }

    init() {
        super.getChild("#chart")
            .highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Fruit Consumption'
                },
                xAxis: {
                    categories: ['Apples', 'Bananas', 'Oranges']
                },
                yAxis: {
                    title: {
                        text: 'Fruit eaten'
                    }
                },
                series: [{
                    name: 'Jane',
                    data: [1, 0, 4]
                }, {
                    name: 'John',
                    data: [5, 7, 3]
                }]
            });
    }
}