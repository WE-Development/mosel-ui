import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Response} from "@angular/http";
import {InfoService} from "../rest-service/info.service";
import {InfoResponse} from "../rest-service/info-response";
import {MdSnackBar} from "@angular/material";
import {SessionCache} from "../service/session-cache.service";

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css'],
  providers: [InfoService, SessionCache]
})
export class NodesComponent implements OnInit {

  constructor(private router: Router,
              private infoService: InfoService,
              private snackBar: MdSnackBar) {
  }

  nodes: string[];

  ngOnInit() {
    this.infoService.info()
      .subscribe(
        this.onSuccess,
        this.onError
      );
  }

  private onSuccess = (login: InfoResponse) => {
    this.nodes = login.nodes;
  };

  private onError = (res: Response | any) => {
    if (!(res instanceof Response)) {
      this.snackBar.open(res.toString(), "Ok", {duration: 6000});
      return;
    }

    if (res.status == 401) {
      this.router.navigate(["/login"]);
      return;
    }

    this.snackBar.open(res.statusText, "Ok", {duration: 6000});
  }
}
