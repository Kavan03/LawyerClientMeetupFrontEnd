import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Relawyer2Component } from './relawyer2.component';

describe('Relawyer2Component', () => {
  let component: Relawyer2Component;
  let fixture: ComponentFixture<Relawyer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Relawyer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Relawyer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
