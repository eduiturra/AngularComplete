import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneNormal1Component } from './hone-normal1.component';

describe('HoneNormal1Component', () => {
  let component: HoneNormal1Component;
  let fixture: ComponentFixture<HoneNormal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneNormal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneNormal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
