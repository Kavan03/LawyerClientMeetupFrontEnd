import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminaldefenseComponent } from './criminaldefense.component';

describe('CriminaldefenseComponent', () => {
  let component: CriminaldefenseComponent;
  let fixture: ComponentFixture<CriminaldefenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminaldefenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminaldefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
