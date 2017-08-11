import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdSnackBarModule,
  MdToolbarModule
} from "@angular/material";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {LoginComponent} from "./login/login.component";
import {AppRoutingModule} from "./app-routing.module";
import {NodesModule} from "./nodes/nodes.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LoginComponent
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
    MdCardModule,
    MdInputModule,
    MdSnackBarModule,

    NodesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
