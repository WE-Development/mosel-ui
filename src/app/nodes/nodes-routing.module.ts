import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NodesComponent} from "./nodes.component";


const nodesRoutes: Routes = [
  {
    path: "nodes",
    component: NodesComponent
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
