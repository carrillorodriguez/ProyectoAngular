import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAlternativoComponent } from './registro-alternativo.component';

describe('RegistroAlternativoComponent', () => {
  let component: RegistroAlternativoComponent;
  let fixture: ComponentFixture<RegistroAlternativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAlternativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAlternativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
