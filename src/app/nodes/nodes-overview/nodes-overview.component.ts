import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nodes-overview',
  templateUrl: './nodes-overview.component.html',
  styleUrls: ['./nodes-overview.component.css']
})
export class NodesOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log(Date.now());
  }
}
