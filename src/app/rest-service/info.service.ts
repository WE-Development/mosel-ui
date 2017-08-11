import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";
import {HttpUtils} from "../http-utils";
import {SessionCache} from "../service/session-cache.service";
import {Observable} from "rxjs";
import {InfoResponse} from "./info-response";

@Injectable()
export class InfoService {

  private infoUrl: string = environment.baseUrl + "/info";

  constructor(private http: Http,
              private sessionCache: SessionCache) {
  }

  info(): Observable<InfoResponse> {
    return this.http.get(this.infoUrl, this.sessionCache.newRequestOptions())
      .map(HttpUtils.extractData);
  }
}
