import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescListTermComponent } from './desc-list-term.component';

describe('DescListTermComponent', () => {
  let component: DescListTermComponent;
  let fixture: ComponentFixture<DescListTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescListTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescListTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
