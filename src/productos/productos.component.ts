import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  // Definimos un arreglo de productos con nombre y precio
  products = [
    { id: 1, name: 'Producto A', price: 100 },
    { id: 2, name: 'Producto B', price: 150 },
    { id: 3, name: 'Producto C', price: 200 },
    { id: 4, name: 'Producto D', price: 250 },
    { id: 5, name: 'Producto D', price: 250 }
  ];

  constructor() { }

  ngOnInit(): void {
    // Aquí podríamos cargar los productos desde una API si fuera necesario
  }
}
