import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tipo1Component } from './tipo1.component';

describe('Tipo1Component', () => {
  let component: Tipo1Component;
  let fixture: ComponentFixture<Tipo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tipo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tipo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
