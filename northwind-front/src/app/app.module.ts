import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
//import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    EditarProductoComponent,
    
    EditarClienteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,  
    EmpleadosComponent,
    EditarEmpleadoComponent,
    ProductosComponent
    //CustomerRegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

