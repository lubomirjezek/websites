import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescListDataComponent } from './desc-list-data.component';

describe('DescListDataComponent', () => {
  let component: DescListDataComponent;
  let fixture: ComponentFixture<DescListDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescListDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescListDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
