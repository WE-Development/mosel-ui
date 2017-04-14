import {Observable} from "rxjs";
import {Response} from "@angular/http";

export class HttpUtils {

  static extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  static handleError(res: Response | any) {
    let errMsg: string;

    if (res instanceof Response) {
      const body = res.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${res.status} - ${res.statusText || ''} ${err}`;
    } else {
      errMsg = res.message ? res.message : res.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
