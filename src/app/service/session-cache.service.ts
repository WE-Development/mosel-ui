import {Injectable} from "@angular/core";
import {LoginResponse} from "../rest-service/login-response";
import {Headers, RequestOptionsArgs} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class SessionCache {

  private state: LoginResponse | Credentials;

  save(response: LoginResponse | Credentials) {
    this.state = response;
  }

  appendAuthHeader(headers: Headers) {
    if (this.state instanceof LoginResponse) {
      const token = this.state.key;
      headers.append("Authorization", "Bearer " + token);
    } else {
      const creds = btoa(this.state.username + ":" + this.state.password);
      headers.append("Authorization", "Basic " + creds);
    }
  }

  newRequestOptions(): RequestOptionsArgs {
    const headers: Headers = new Headers();
    this.appendAuthHeader(headers);
    return {
      headers: headers,
      withCredentials: environment.production // set this parameter in prod only
    };
  }
}

export class Credentials {
  username: string;
  password: string;
}
