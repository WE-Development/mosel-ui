import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {MdButtonModule, MdIconModule, MdMenuModule, MdToolbarModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./appRoutes";
import {NodesComponent} from "./nodes/nodes.component";
import { NodeDetailComponent } from './node-detail/node-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NodesComponent,
    NodeDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdMenuModule,
    MdButtonModule,
    MdIconModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
