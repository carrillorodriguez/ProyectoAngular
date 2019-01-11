import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro02Component } from './registro02.component';

describe('Registro02Component', () => {
  let component: Registro02Component;
  let fixture: ComponentFixture<Registro02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registro02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registro02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
