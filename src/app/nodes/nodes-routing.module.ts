import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NodesComponent} from "./nodes.component";
import {NodeDetailComponent} from "./node-detail/node-detail.component";


const nodesRoutes: Routes = [
  {
    path: "nodes",
    component: NodesComponent
  },
  {
    path: "nodes/:name",
    component: NodeDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(nodesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NodesRoutingModule {
}
