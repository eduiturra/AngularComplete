import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipo2Component } from './tipo2.component';

describe('Tipo2Component', () => {
  let component: Tipo2Component;
  let fixture: ComponentFixture<Tipo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
