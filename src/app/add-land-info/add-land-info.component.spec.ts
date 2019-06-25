import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLandInfoComponent } from './add-land-info.component';

describe('AddLandInfoComponent', () => {
  let component: AddLandInfoComponent;
  let fixture: ComponentFixture<AddLandInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLandInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLandInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
