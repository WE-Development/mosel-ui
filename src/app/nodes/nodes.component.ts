import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {InfoService} from "../rest-service/info.service";
import {InfoResponse} from "../rest-service/info-response";
import {MdSnackBar} from "@angular/material";
import {HttpUtils} from "../http-utils";

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css'],
  providers: [InfoService]
})
export class NodesComponent implements OnInit {

  constructor(private router: Router,
              private infoService: InfoService,
              private snackBar: MdSnackBar,
              private httpUtils: HttpUtils) {
  }

  nodes: string[];

  ngOnInit() {
    this.infoService.info()
      .subscribe(
        this.onSuccess,
        this.httpUtils.handleError
      );
  }

  private onSuccess = (info: InfoResponse) => {
    this.nodes = info.nodes;
  };
}
