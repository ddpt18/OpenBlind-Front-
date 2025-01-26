import { Component } from '@angular/core';
import { Ruta } from '../../models/route.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss'
})
export class RoutesComponent {

  route: Ruta = {
    name: '',
    location: '',
    transportName: ''
  };

  constructor() {}

  /**
   * Maneja el envío del formulario.
   * @param form NgForm
   */
  onSubmit(form: NgForm): void {
    if (form.valid) {
      const sanitizedRoute = this.sanitizeInput(this.route);
      this.saveToLocalStorage(sanitizedRoute);
      console.log('Ruta registrada y guardada en localStorage:', sanitizedRoute);
      alert('Ruta registrada correctamente.');
      form.reset(); // Limpia el formulario después de enviar
    } else {
      console.warn('Formulario no válido');
      alert('Por favor, completa todos los campos del formulario.');
    }
  }

  /**
   * Método para sanitizar los datos del formulario.
   * @param route Ruta
   * @returns Ruta sanitizada
   */
  private sanitizeInput(route: Ruta): Ruta {
    return {
      name: this.escapeHtml(route.name.trim()),
      location: this.escapeHtml(route.location.trim()),
      transportName: this.escapeHtml(route.transportName.trim())
    };
  }

  /**
   * Escapa caracteres HTML peligrosos.
   * @param input Cadena de texto
   * @returns Cadena escapada
   */
  private escapeHtml(input: string): string {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return input.replace(/[&<>"']/g, (char) => map[char]);
  }

  /**
   * Guarda la información de la ruta en localStorage.
   * @param route Ruta a guardar
   */
  private saveToLocalStorage(route: Ruta): void {
    try {
      const existingRoutes = this.getRoutesFromLocalStorage();
      existingRoutes.push(route);
      localStorage.setItem('routes', JSON.stringify(existingRoutes));
    } catch (error) {
      console.error('Error guardando en localStorage:', error);
    }
  }

  /**
   * Obtiene las rutas almacenadas en localStorage.
   * @returns Array de rutas o un array vacío si no hay datos
   */
  private getRoutesFromLocalStorage(): Ruta[] {
    const routes = localStorage.getItem('routes');
    return routes ? JSON.parse(routes) : [];
  }
}
