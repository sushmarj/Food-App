import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecuisineComponent } from './managecuisine.component';

describe('ManagecuisineComponent', () => {
  let component: ManagecuisineComponent;
  let fixture: ComponentFixture<ManagecuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
