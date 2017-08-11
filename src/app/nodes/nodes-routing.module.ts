import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NodesComponent} from "./nodes.component";
import {NodeDetailComponent} from "./node-detail/node-detail.component";
import {NodesOverviewComponent} from "./nodes-overview/nodes-overview.component";


const nodesRoutes: Routes = [
  {
    path: "nodes",
    component: NodesComponent,
    children: [
      {
        path: ":name",
        component: NodeDetailComponent
      }, {
        path: "",
        component: NodesOverviewComponent
      }
    ]
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
