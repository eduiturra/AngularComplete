import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoHomeComponent } from './tipo-home.component';

describe('TipoHomeComponent', () => {
  let component: TipoHomeComponent;
  let fixture: ComponentFixture<TipoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
