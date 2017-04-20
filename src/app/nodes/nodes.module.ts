import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {NodesComponent} from "./nodes.component";
import {NodeDetailComponent} from "./node-detail/node-detail.component";
import {NodesRoutingModule} from "./nodes-routing.module";
import {MdButtonModule, MdListModule, MdSidenavModule} from "@angular/material";
import { NodesOverviewComponent } from './nodes-overview/nodes-overview.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    MdSidenavModule,
    MdListModule,
    MdButtonModule,

    NodesRoutingModule
  ],
  declarations: [
    NodesComponent,
    NodeDetailComponent,
    NodesOverviewComponent
  ]
})
export class NodesModule {
}
