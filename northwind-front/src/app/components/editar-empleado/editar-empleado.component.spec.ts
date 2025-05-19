import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarEmpleadoComponent } from './editar-empleado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditarEmpleadoComponent', () => {
  let component: EditarEmpleadoComponent;
  let fixture: ComponentFixture<EditarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EditarEmpleadoComponent,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.empleadoForm.valid).toBeFalsy();
  });

  it('should validate form fields', () => {
    const firstName = component.empleadoForm.controls['firstName'];
    const title = component.empleadoForm.controls['title'];

    firstName.setValue('');
    title.setValue('');
    expect(component.empleadoForm.valid).toBeFalsy();

    firstName.setValue('Juan');
    title.setValue('Manager');
    expect(component.empleadoForm.valid).toBeTruthy();
  });
});
