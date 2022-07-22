import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAtributosComponent } from './lista-atributos.component';

describe('ListaAtributosComponent', () => {
  let component: ListaAtributosComponent;
  let fixture: ComponentFixture<ListaAtributosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAtributosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
