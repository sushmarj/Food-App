import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineEdiComponent } from './cuisine-edi.component';

describe('CuisineEdiComponent', () => {
  let component: CuisineEdiComponent;
  let fixture: ComponentFixture<CuisineEdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuisineEdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineEdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
