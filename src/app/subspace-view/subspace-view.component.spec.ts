import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubspaceViewComponent } from './subspace-view.component';

describe('SubspaceViewComponent', () => {
  let component: SubspaceViewComponent;
  let fixture: ComponentFixture<SubspaceViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubspaceViewComponent]
    });
    fixture = TestBed.createComponent(SubspaceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
