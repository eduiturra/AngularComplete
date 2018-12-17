import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoHomeNormalComponent } from './tipo-home-normal.component';

describe('TipoHomeNormalComponent', () => {
  let component: TipoHomeNormalComponent;
  let fixture: ComponentFixture<TipoHomeNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoHomeNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoHomeNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
