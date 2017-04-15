import {Component} from "@angular/core";
import {SessionCache} from "./service/session-cache.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SessionCache]
})
export class AppComponent {

}
