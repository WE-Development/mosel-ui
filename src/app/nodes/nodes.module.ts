import {NgModule} from "@angular/core";
import {NodesComponent} from "./nodes.component";
import {NodeDetailComponent} from "./node-detail/node-detail.component";
import {NodesRoutingModule} from "./nodes-routing.module";
import {MdButtonModule, MdListModule, MdSidenavModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";

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
    NodeDetailComponent
  ]
})
export class NodesModule {
}
