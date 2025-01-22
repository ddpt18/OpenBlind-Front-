import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isCollapsed = false;
  isCollapsedMensajes = true;
  isCollapsedPuntos = true;
  isCollapsedGuia = true;
  isCollapsedRutas = true; 

  constructor(private router: Router) {}

  onMensajesClick(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/core/personalized-message']);
    this.toggleCollapse('Mensajes');
  }

  onHistorialMensajesClick(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/core/list/message-personalized-list']);
  }

  onPuntosClick(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/core/tourist-registration']);
    this.toggleCollapse('Puntos');
  }

  onHistorialPuntosClick(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/core/list/tourist-register-list']);
  }


  onRutasClick(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/core/routes']);
    this.toggleCollapse('Rutas');
  }

  onHistorialRutasClick(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/core/list/routes-list']);
  }

  toggleCollapse(section: string): void {
    if (section === 'Mensajes') {
      this.isCollapsedMensajes = !this.isCollapsedMensajes;
    } else if (section === 'Puntos') {
      this.isCollapsedPuntos = !this.isCollapsedPuntos;
    } else if (section === 'Guia') {
      this.isCollapsedGuia = !this.isCollapsedGuia;
    } else if (section === 'Rutas') {
      this.isCollapsedRutas = !this.isCollapsedRutas;
    }
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;  
  }
  
}