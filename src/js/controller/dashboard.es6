import {Controller} from "./controller.es6";
import {MoselUIContext} from "./context.es6";
import {ChartCPU} from "./charts/ChartCPU.es6";
import {ChartRAM} from "./charts/ChartRAM.es6";
import {ChartWarning} from "./charts/ChartWarning.es6";
import {ChartDisk} from "./charts/ChartDisk.es6";

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
        this.load(this.getChild('#chart-cpu'), new ChartCPU(this.info));
        this.load(this.getChild('#chart-ram'), new ChartRAM(this.info));
        this.load(this.getChild('#chart-warning'), new ChartWarning(this.info));
        this.load(this.getChild('#chart-disk'), new ChartDisk(this.info));
    }
}