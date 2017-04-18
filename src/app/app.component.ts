import {Component} from "@angular/core";
import {SessionCache} from "./service/session-cache.service";
import {HttpUtils} from "./http-utils";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SessionCache, HttpUtils]
})
export class AppComponent {

}
