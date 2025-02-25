import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  slides = [
    {
      image: '../assets/img/bg.png',
      title: 'New Summer Collection',
      text: 'Algo de texto 1',
      description: '50% en toda la tienda'
    },
    {
      image: '../assets/img/bg.png',
      title: 'Winter Fashion Sale',
      text: 'Algo de texto 2',
      description: 'Hasta 70% de descuento'
    },
    {
      image: '../assets/img/bg.png',
      title: 'Spring Arrivals',
      text: 'Algo de texto 3',
      description: 'Nuevos estilos disponibles'
    }
  ];

  currentIndex = 0;

  get currentSlide() {
    return this.slides[this.currentIndex];
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

}
