import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-node-detail',
  templateUrl: './node-detail.component.html',
  styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent implements OnInit {

  node: string;
  options: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.extractNodeNameParams(params)
    });

    this.testChart();
  }

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
