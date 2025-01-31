import { AfterViewInit, Component } from '@angular/core';
import { Ruta } from '../../models/route.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import * as L from 'leaflet';  // Importar Leaflet



@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss'
})
export class RoutesComponent implements AfterViewInit{

  routeForm: FormGroup;
  map: L.Map | undefined;

  constructor(private fb: FormBuilder) {
    this.routeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      location: ['', [Validators.required, Validators.minLength(3)]],
      transportName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngAfterViewInit(): void {
    // Inicializar mapa y centrar en Quito (latitud: -0.1807, longitud: -78.4678)
    this.map = L.map('map').setView([-0.1807, -78.4678], 13);  // 13 es el nivel de zoom (puedes ajustarlo)

    // Cargar el tile layer (utilizando OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Opcional: Agregar un marcador en Quito
    L.marker([-0.1807, -78.4678]).addTo(this.map)
      .bindPopup('Quito, Ecuador')
      .openPopup();
  }

  onSubmit() {
    if (this.routeForm.valid) {
      const routeData: Ruta = this.routeForm.value;

      // Sanitizar entrada
      const sanitizedRoute = this.sanitizeInput(routeData);

      // Obtener rutas existentes desde localStorage o inicializar vacío
      const storedRoutes = JSON.parse(localStorage.getItem('routes') || '[]');
      
      // Agregar la nueva ruta al array
      storedRoutes.push(sanitizedRoute);
      
      // Guardar el array actualizado en localStorage
      localStorage.setItem('routes', JSON.stringify(storedRoutes));
      
      // Notificar al usuario
      this.showNotification('Ruta guardada correctamente.', 'success');
      
      // Restablecer el formulario después del envío
      this.routeForm.reset();
    } else {
      this.showNotification('Formulario inválido', 'error');
    }
  }

  private sanitizeInput(route: Ruta): Ruta {
    return {
      id: this.generateUniqueId(),
      name: this.escapeHtml(route.name.trim()),
      location: this.escapeHtml(route.location.trim()),
      transportName: this.escapeHtml(route.transportName.trim())
    };
  }

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

  private generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private showNotification(message: string, type: 'success' | 'error'): void {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : 'danger'}`;
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => document.body.removeChild(notification), 3000);
  }
}
