import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptionsArgs} from "@angular/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {LoginResponse} from "app/login/login-response";
import {HttpUtils} from "../http-utils";

@Injectable()
export class LoginService {

  private loginUrl: string = environment.baseUrl + "/login";

  constructor(private http: Http) {
  }

  login(username: String, password: String): Observable<LoginResponse> {
    let headers: Headers = new Headers();

    let creds = btoa(username + ":" + password);
    headers.append("Authorization", "Basic " + creds);

    let options: RequestOptionsArgs = {
      headers: headers
    };

    if (environment.production) {
      options.withCredentials = true;
    }

    return this.http
      .get(this.loginUrl, options)
      .map(HttpUtils.extractData);
  }
}
