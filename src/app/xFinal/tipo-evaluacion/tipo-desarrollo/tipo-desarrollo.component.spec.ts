import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDesarrolloComponent } from './tipo-desarrollo.component';

describe('TipoDesarrolloComponent', () => {
  let component: TipoDesarrolloComponent;
  let fixture: ComponentFixture<TipoDesarrolloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDesarrolloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
