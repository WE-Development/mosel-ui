import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  onClickLogin() {
    console.log(this.username + " " + this.password);
    this.location.back();
  }

  onClickBack() {
    this.location.back();
  }
}
