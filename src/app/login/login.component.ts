import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {LoginService} from "../rest-service/login.service";
import {LoginResponse} from "../rest-service/login-response";
import {MdSnackBar} from "@angular/material";
import {Response} from "@angular/http";
import {Credentials, SessionCache} from "../service/session-cache.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService, SessionCache]
})
export class LoginComponent implements OnInit {

  creds: Credentials;

  constructor(private location: Location,
              private loginService: LoginService,
              private sessionCache: SessionCache,
              private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.creds = new Credentials();
  }

  onClickLogin() {
    this.loginService.login(this.creds.username, this.creds.password)
      .subscribe(
        this.onLogin,
        this.onError
      );
  }

  private onLogin = (login: LoginResponse) => {
    this.snackBar.open("Login successful", "Ok", {duration: 2000});

    if (login.successful == null) {
      this.sessionCache.save(this.creds);
    } else {
      this.sessionCache.save(login);
    }

    this.location.back();
  };

  private onError = (res: Response | any) => {
    this.snackBar.open("Invalid credentials", "Ok", {duration: 6000});

    let login: LoginResponse;

    try {
      login = res.json();
    } catch (e) {
      login = new LoginResponse();
      login.successful = false;
    }

    if (login.successful == null) {
      login.successful = false;
    }

    this.sessionCache.save(login)
  };

  onClickBack() {
    this.location.back();
  }
}
