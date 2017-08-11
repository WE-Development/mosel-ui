import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs} from "@angular/http";
import {environment} from "../../environments/environment";
import {HttpUtils} from "../http-utils";
import {SessionCache} from "../service/session-cache.service";
import {Observable} from "rxjs";
import {NodeInfoResponse} from "./node-info-response";

@Injectable()
export class NodeInfoService {

  private nodeInfoUrl: string = environment.baseUrl + "/nodeInfo/";

  constructor(private http: Http,
              private sessionCache: SessionCache) {
  }

  info(node: string, sinceSecs: number): Observable<NodeInfoResponse> {
    let sinceParam: number = (Date.now() / 1000) - sinceSecs;

    let options: RequestOptionsArgs = this.sessionCache.newRequestOptions();
    options.params = {
      "since": sinceParam.toFixed(0)
    };

    return this.http.get(this.nodeInfoUrl + node, options)
      .map(HttpUtils.extractData);
  }
}
