import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.obtenerProductos().subscribe((data: any[]) => {
      this.productos = data;
    });
  }
}
