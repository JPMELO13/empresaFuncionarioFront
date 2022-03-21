import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaDependenteComponent } from './edita-dependente.component';

describe('EditaDependenteComponent', () => {
  let component: EditaDependenteComponent;
  let fixture: ComponentFixture<EditaDependenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaDependenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaDependenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
