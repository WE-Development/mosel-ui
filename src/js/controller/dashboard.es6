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

        var nodeToShow, i = 0;
        for (let entry of data.Nodes) {
            let name = entry[0];
            let info = entry[1];

            if (this.context.queryParams.get('node') == name) {
                nodeToShow = i;
            }
            i++;

            var nodeHeader = $('<h3>' + name + '</h3>');
            nodeHeader.attr('data-nodeHeader', '');
            nodeHeader.click(e => this.onClickNode(name));
            nodeHeader.appendTo(nodesContainer);

            var infoContainer = $('<div></div>');
            infoContainer.appendTo(nodesContainer);

            this.load(infoContainer, new NodeCharts(info));
        }

        nodesContainer.accordion({
            active: nodeToShow,
            heightStyle: 'content',
            collapsible: true
        });
    }

    onClickNode(name) {
        this.context.queryParams.set('node', name);
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
        super('view/nodeChart.html');
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