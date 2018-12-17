import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoVfComponent } from './tipo-vf.component';

describe('TipoVfComponent', () => {
  let component: TipoVfComponent;
  let fixture: ComponentFixture<TipoVfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoVfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoVfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
