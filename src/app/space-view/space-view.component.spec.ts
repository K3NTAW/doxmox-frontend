import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceViewComponent } from './space-view.component';

describe('SpaceViewComponent', () => {
  let component: SpaceViewComponent;
  let fixture: ComponentFixture<SpaceViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpaceViewComponent]
    });
    fixture = TestBed.createComponent(SpaceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
