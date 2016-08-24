import {Controller} from "./controller.es6";
import {MoselUIContext} from "./context.es6";
import {ChartCPU} from "./charts/ChartCPU.es6";
import {ChartRAM} from "./charts/ChartRAM.es6";
import {ChartWarning} from "./charts/ChartWarning.es6";
import {ChartDisk} from "./charts/ChartDisk.es6";

export class Dashboard extends Controller {

    constructor() {
        super("view/dashboard.html");
        this.lastRequest = null;
        this.nodeCharts = [];
    }

    init() {
        console.log("Dashboard init - Context " + (this.context instanceof MoselUIContext), this.context);

        var nodeInfo = this.context.nodeInfoDao;
        nodeInfo.get({
            done: data => {
                this.renderNodes(data);
                this.lastRequest = new Date().getTime();
            }
        });

        //setTimeout(() => {
        setInterval(() => {
            //console.debug('Interval');
            nodeInfo.getSince(this.lastRequest, {
                done: data => this.updateNodes(data)
            });
            this.lastRequest = new Date().getTime();
        }, 1000);

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

            var nodeChart = new NodeCharts(name, info);
            this.nodeCharts.push(nodeChart);
            this.load(infoContainer, nodeChart);
        }

        nodesContainer.accordion({
            active: nodeToShow,
            heightStyle: 'content',
            collapsible: true
        });
    }

    updateNodes(data) {
        if (this.nodeCharts == null) {
            return;
        }

        this.nodeCharts.forEach(nodeController => {
            nodeController.charts.forEach(chartController => {
                chartController.addNewInfo(data.Nodes.get(nodeController.name));
            })
        });
    }

    onClickNode(name) {
        this.context.queryParams.set('node', name);
    }
}

class NodeCharts extends Controller {

    constructor(name, info) {
        super('view/nodeCharts.html');
        this.name = name;
        this.info = info;
        this.charts = [];
    }

    init() {
        var chart = new ChartCPU(this.info);
        this.charts.push(chart);
        this.load(this.getChild('#chart-cpu'), chart);

        chart = new ChartRAM(this.info);
        this.charts.push(chart);
        this.load(this.getChild('#chart-ram'), chart);

        chart = new ChartWarning(this.info);
        this.charts.push(chart);
        this.load(this.getChild('#chart-warning'), chart);

        chart = new ChartDisk(this.info);
        this.charts.push(chart);
        this.load(this.getChild('#chart-disk'), chart);
    }
}