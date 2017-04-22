import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {NodeInfoService} from "../../rest-service/node-info.service";
import {NodeInfoResponse} from "../../rest-service/node-info-response";
import {HttpUtils} from "../../http-utils";

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss'],
  providers: [NodeInfoService]
})
export class NodeDetailComponent implements OnInit {

  node: string;
  lastUpdate: Date;

  options: any;

  constructor(private infoService: NodeInfoService,
              private httpUtils: HttpUtils,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.extractNodeNameParams(params)
    });

    this.update();
    this.testChart();
  }

  update() {
    this.infoService.info(this.node, 10)
      .subscribe(
        this.onSuccess,
        this.httpUtils.handleError
      );
  }

  private onSuccess = (info: NodeInfoResponse) => {
    //this.nodes = info.nodes;
    this.lastUpdate = info.time;
  };

  private testChart() {
    this.options = {
      title: {text: 'simple chart'},
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }

  private extractNodeNameParams(params: Params) {
    this.node = params['name']
  }
}
