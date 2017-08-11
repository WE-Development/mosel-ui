import {Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";

@Injectable()
export class HttpUtils {

  constructor(private router: Router,
              private snackBar: MdSnackBar) {
  }

  static extractData(res: Response): any {
    let body = res.json();
    return body || {};
  }

  handleError(res: Response | any) {
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
