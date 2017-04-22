import {Component, OnInit} from "@angular/core";
import {InfoService} from "../rest-service/info.service";
import {InfoResponse} from "../rest-service/info-response";
import {HttpUtils} from "../http-utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: [
    './../navbar.scss',
    './nodes.component.scss'
  ],
  providers: [InfoService]
})
export class NodesComponent implements OnInit {

  constructor(private infoService: InfoService,
              private httpUtils: HttpUtils,
              private router: Router) {
  }

  nodes: string[] = ["self", "test", "test", "test", "test", "test", "test",
    "test", "test", "test", "test", "test", "test", "test", "test", "test",
    "test", "test", "test", "test", "test", "test", "test", "test", "test", "test"];

  ngOnInit() {
    this.infoService.info()
      .subscribe(
        this.onSuccess,
        this.httpUtils.handleError
      );
  }

  onClickNode(node: string) {
    this.router.navigate(["/nodes", node]);
  }

  private onSuccess = (info: InfoResponse) => {
    this.nodes = info.nodes;
  };
}
