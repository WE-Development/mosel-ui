import {Routes} from "@angular/router";
import {NodesComponent} from "./nodes/nodes.component";
import {NodeDetailComponent} from "./node-detail/node-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

/**
 * Created by Robin Engel
 */
export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/nodes",
    pathMatch: "full"
  },
  {
    path: "nodes",
    component: NodesComponent
  },
  {
    path: "node/:name",
    component: NodeDetailComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
