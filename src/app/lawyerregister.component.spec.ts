import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerregisterComponent } from './lawyerregister.component';

describe('LawyerregisterComponent', () => {
  let component: LawyerregisterComponent;
  let fixture: ComponentFixture<LawyerregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
