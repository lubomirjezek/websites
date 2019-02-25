import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescListComponent } from './desc-list.component';

describe('DescListComponent', () => {
  let component: DescListComponent;
  let fixture: ComponentFixture<DescListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
