import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilestudentComponent } from './profilestudent.component';

describe('ProfilestudentComponent', () => {
  let component: ProfilestudentComponent;
  let fixture: ComponentFixture<ProfilestudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilestudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
