import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from '../header/header.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Propiedad isLoading para controlar la animación de carga
  isLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    // Simula un retraso para cambiar el estado de carga (esto puedes adaptarlo a tu lógica real)
    setTimeout(() => {
      this.isLoading = false;  // Detener la carga una vez se haya "cargado" todo
    }, 2000); // Esto simula que la carga dura 2 segundos. Ajusta el tiempo según tus necesidades.
  }
}
