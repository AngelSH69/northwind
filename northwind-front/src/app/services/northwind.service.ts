import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  private apiUrl = 'http://localhost:9525/api/employees'; // URL correcta a la API

  constructor(private http: HttpClient) {}

  // Obtener todos los empleados
  getEmpleados(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap(data => console.log('Datos de empleados:', data)), // Verificar los datos recibidos
      catchError(this.handleError)  // Manejar cualquier error de la API
    );
  }

  // Obtener un empleado por id
  getEmpleado(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      tap(data => console.log(`Empleado con id ${id}:`, data)), // Verificar los datos del empleado
      catchError(this.handleError)  // Manejar cualquier error de la API
    );
  }

  // Crear un nuevo empleado
  createEmpleado(empleado: any): Observable<any> {
    return this.http.post(this.apiUrl, empleado).pipe(
      tap(data => console.log('Empleado creado:', data)),  // Verificar la creación del empleado
      catchError(this.handleError)  // Manejar cualquier error de la API
    );
  }

  // Actualizar un empleado
  updateEmpleado(id: number, empleado: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, empleado).pipe(
      tap(data => console.log(`Empleado con id ${id} actualizado:`, data)),  // Verificar los datos actualizados
      catchError(this.handleError)  // Manejar cualquier error de la API
    );
  }

  // Eliminar un empleado
  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(data => console.log(`Empleado con id ${id} eliminado:`, data)),  // Verificar la eliminación
      catchError(this.handleError)  // Manejar cualquier error de la API
    );
  }

  // Función para manejar errores en las solicitudes HTTP
  private handleError(error: any): Observable<never> {
    console.error('Ocurrió un error:', error);  // Imprimir el error en consola
    throw error;  // Lanzar el error para que se pueda manejar en el componente
  }
}
