import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  { path: '', redirectTo: '/empleados', pathMatch: 'full' },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'editar-empleado/:id', component: EditarEmpleadoComponent },
  { path: 'editar-producto/:id', component: EditarProductoComponent },
  { path: 'editar-cliente/:id', component: EditarClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
