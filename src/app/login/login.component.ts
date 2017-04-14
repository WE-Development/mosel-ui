import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {LoginService} from "./login.service";
import {LoginResponse} from "./login-response";
import {MdSnackBar} from "@angular/material";
import {Response} from "@angular/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private location: Location, private loginService: LoginService, private snackBar: MdSnackBar) {
  }

  ngOnInit() {
  }

  onTest() {
    this.snackBar.open("Hallo Welt", "OK", {
      duration: 5000,
      politeness: "assertive"
    });
  }

  onClickLogin() {
    console.log(this.username + " " + this.password);
    this.loginService.login(this.username, this.password)
      .subscribe(
        this.onLogin,
        this.onError
      );
  }

  private onLogin = (login: LoginResponse) => {
    this.snackBar.open("Login successful");
    this.location.back();
  };

  private onError = (res: Response | any) => {
    if (res instanceof Response && res.status == 401) {
      this.snackBar.open("Invalid credentials");
    } else {
      this.snackBar.open(res.toString());
    }
  };

  onClickBack() {
    this.location.back();
  }
}
