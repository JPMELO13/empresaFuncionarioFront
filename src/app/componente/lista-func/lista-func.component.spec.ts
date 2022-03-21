import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFuncComponent } from './lista-func.component';

describe('ListaFuncComponent', () => {
  let component: ListaFuncComponent;
  let fixture: ComponentFixture<ListaFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFuncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
