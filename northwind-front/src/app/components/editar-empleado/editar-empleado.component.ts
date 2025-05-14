import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-editar-empleado',
  standalone: true,
  
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EditarEmpleadoComponent implements OnInit {
  empleadoForm!: FormGroup;
  isEdit: boolean = false;
  idEmpleado: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: NorthwindService,
    private fb: FormBuilder
  ) {
    this.empleadoForm = this.fb.group({
      employeId: [''],
      title: ['']
      
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.idEmpleado = idParam !== null ? Number(idParam) : 0;
    this.isEdit = this.idEmpleado !== 0;

    if (this.isEdit) {
      this.service.getEmpleado(this.idEmpleado).subscribe((data:any) => {
        console.log(data.firstName);
        this.empleadoForm.patchValue(
          nombre = data.firstName;
          posicion =
        )
      });
    }
  }
guardarEmpleado(): void {
  const empleadoData = this.empleadoForm.value;
  
  if (this.isEdit) {
    empleadoData.employeeId = this.idEmpleado; 

    this.service.updateEmpleado(this.idEmpleado, empleadoData).subscribe(() => {
      this.router.navigate(['/empleados']);
    });
  } else {
    this.service.createEmpleado(empleadoData).subscribe(() => {
      this.router.navigate(['/empleados']);
    });
    }
  }
    
  

  cancelar(): void {
    this.router.navigate(['/empleados']);
  }
}
