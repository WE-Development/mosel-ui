import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesOverviewComponent } from './nodes-overview.component';

describe('NodesOverviewComponent', () => {
  let component: NodesOverviewComponent;
  let fixture: ComponentFixture<NodesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
