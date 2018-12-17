import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoNormalComponent } from './tipo-normal.component';

describe('TipoNormalComponent', () => {
  let component: TipoNormalComponent;
  let fixture: ComponentFixture<TipoNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
