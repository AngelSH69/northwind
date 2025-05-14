import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'editar-empleado/:id', component: EditarEmpleadoComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
 { path: 'customer-register', component: CustomerRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}