import { AfterViewInit, Component } from '@angular/core';
import { Ruta } from '../../models/route.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import * as L from 'leaflet';  // Importar Leaflet
import 'leaflet.pm';  // Importar leaflet.pm para habilitar los controles



@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss'
})
export class RoutesComponent implements AfterViewInit{

  routeForm: FormGroup;
  map: L.Map | undefined;
  drawnItems: L.FeatureGroup; // Para manejar los elementos dibujados en el mapa
  routeCoordinates: L.LatLng[] = []; // Almacenar las coordenadas de la ruta dibujada

  constructor(private fb: FormBuilder) {
    this.routeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      location: ['', [Validators.required, Validators.minLength(3)]],
      transportName: ['', [Validators.required, Validators.minLength(3)]]
    });

    // Inicializar la capa para los elementos dibujados
    this.drawnItems = new L.FeatureGroup();
  }

  ngAfterViewInit(): void {
    // Inicializar mapa y centrar en Quito (latitud: -0.1807, longitud: -78.4678)
    this.map = L.map('map').setView([-0.1807, -78.4678], 13);  // 13 es el nivel de zoom (puedes ajustarlo)

    // Cargar el tile layer (utilizando OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Habilitar el control de dibujo
    this.map.pm.addControls({
      position: 'topleft',
      drawPolygon: false,
      drawMarker: false,
      drawPolyline: true // Habilitar solo el dibujo de líneas
    });

    // Agregar la capa de elementos dibujados al mapa
    this.map.addLayer(this.drawnItems);

    // Manejar el evento de la creación de la ruta
    this.map.on('pm:create', (event: any) => {
      const layer = event.layer;
      this.routeCoordinates = layer.getLatLngs(); // Obtener las coordenadas
      this.drawnItems.addLayer(layer); // Agregar al mapa
    });
  }

  onSubmit(): void {
    if (this.routeForm.valid && this.routeCoordinates.length > 0) {
      const routeData: Ruta = this.routeForm.value;
      routeData.coordinates = this.routeCoordinates; // Agregar las coordenadas de la ruta

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
      this.drawnItems.clearLayers(); // Limpiar la capa de rutas dibujadas
      this.routeCoordinates = []; // Limpiar las coordenadas
    } else {
      this.showNotification('Formulario inválido o ruta no dibujada', 'error');
    }
  }

  toggleFullScreen(): void {
    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
      if (!document.fullscreenElement) {
        mapContainer.requestFullscreen().catch((err) => console.log(err));
      } else {
        document.exitFullscreen();
      }
    }
  }

  goBack(): void {
    window.history.back();
  }

  private sanitizeInput(route: Ruta): Ruta {
    return {
      id: this.generateUniqueId(),
      name: this.escapeHtml(route.name.trim()),
      location: this.escapeHtml(route.location.trim()),
      transportName: this.escapeHtml(route.transportName.trim()),
      coordinates: route.coordinates // Almacenar las coordenadas de la ruta
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
