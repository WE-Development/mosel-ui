import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {NodeInfoService} from "../../rest-service/node-info.service";
import {NodeInfoData, NodeInfoResponse} from "../../rest-service/node-info-response";
import {HttpUtils} from "../../http-utils";

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: [
    './../../navbar.scss',
    './node-detail.component.scss'
  ],
  providers: [NodeInfoService]
})
export class NodeDetailComponent implements OnInit {

  node: string;
  lastUpdate: Date;

  charts: any[] = [];

  constructor(private infoService: NodeInfoService,
              private httpUtils: HttpUtils,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.extractNodeNameParams(params)
    });

    this.update();
  }

  private extractNodeNameParams(params: Params) {
    this.node = params['name']
  }

  update() {
    this.infoService.info(this.node, 10)
      .subscribe(
        this.onSuccess,
        this.httpUtils.handleError
      );
  }

  private onSuccess = (info: NodeInfoResponse) => {
    this.lastUpdate = info.time;
    this.loadData(info.data);
  };

  private loadData(data: NodeInfoData) {
    console.log(data);

    for (const time in data) {
      const date: Date = new Date(+time * 1000);
      const diagrams = data[time];

      console.log(date);

      for (const diaName in diagrams) {
        const graphs = diagrams[diaName];
        const chart = this.getChart(diaName);

        for (const graphName in graphs) {
          const value = graphs[graphName];
          const series = this.getSeries(chart, graphName);
          series.data.push([
            date.getTime() / 1000,
            +value
          ]);
        }
      }
    }
  }

  private getChart(name: string): any {
    for (const chart of this.charts) {
      if (chart.name == name) {
        return chart;
      }
    }

    const newChart = {
      name: name,
      title: {text: name},
      series: []
    };

    this.charts.push(newChart);
    return newChart;
  }

  private getSeries(chart: any, graphName: string): any {
    for (const series of chart.series) {
      if (series.name == graphName) {
        return series;
      }
    }

    const newSeries = {
      name: graphName,
      data: []
    };
    chart.series.push(newSeries);
    return newSeries;
  }
}
