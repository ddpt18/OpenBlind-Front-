import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'open-blind-front';
  mostrarSidebar = true; // Controla la visibilidad del sidebar
  mostrarNavbar = true;  // Controla la visibilidad del navbar

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const rutasSinBarra = ['/auth/login', '/auth/register']; // Rutas que ocultan sidebar y navbar

        // Actualizamos la visibilidad del sidebar y navbar según la ruta actual
        const rutaActual = event.urlAfterRedirects;
        this.mostrarSidebar = !rutasSinBarra.includes(rutaActual);
        this.mostrarNavbar = !rutasSinBarra.includes(rutaActual);
      }
    });
  }
}
