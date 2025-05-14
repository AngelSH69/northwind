import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NorthwindService } from '../../services/northwind.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  imports: [
    CommonModule,
    FormsModule  // Importa FormsModule aquí
  ]
})
export class EmpleadosComponent implements OnInit {
  empleados: any[] = [];

  constructor(
    private router: Router,
    private service: NorthwindService
  ) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(): void {
    
    this.service.getEmpleados().subscribe(data => {
      this.empleados = data;
      console.log(data);
    });
  }

  createEmpleado(): void {
    this.router.navigate(['/editar-empleado', 0]);
  }

  editEmpleado(id: number): void {
    this.router.navigate(['/editar-empleado', id]);
  }

  deleteEmpleado(id: number): void {
    if (confirm('¿Seguro que quieres eliminar este empleado?')) {
      this.service.deleteEmpleado(id).subscribe(() => {
        this.getEmpleados();
      });
    }
  }
}
