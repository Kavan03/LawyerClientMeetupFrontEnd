import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Relawyer1Component } from './relawyer1.component';

describe('Relawyer1Component', () => {
  let component: Relawyer1Component;
  let fixture: ComponentFixture<Relawyer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Relawyer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Relawyer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
