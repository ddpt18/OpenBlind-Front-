import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
declare let L: any;

@Component({
  selector: 'app-tourist-registration',
  templateUrl: './tourist-registration.component.html',
  styleUrls: ['./tourist-registration.component.scss'],
})
export class TouristRegistrationComponent implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Inicializar el mapa
    const map = L.map('map').setView([0, 0], 2); // Vista inicial

    // Agregar capa de mapas (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Evento para obtener coordenadas al hacer clic
    map.on('click', (e: any) => {
      const lat = e.latlng.lat.toFixed(6); // Latitud con 6 decimales
      const lng = e.latlng.lng.toFixed(6); // Longitud con 6 decimales
      this.updateLocationInput(`${lat}, ${lng}`);
    });
  }

  // Método para actualizar el valor del campo de ubicación de manera segura
  updateLocationInput(value: string): void {
    const sanitizedValue = this.sanitizeInput(value); // Sanitizar el valor
    const locationInput = this.elementRef.nativeElement.querySelector(
      '#ubicacion'
    ) as HTMLInputElement;

    if (locationInput) {
      this.renderer.setProperty(locationInput, 'value', sanitizedValue);
    }
  }

  // Sanitización básica para evitar inyecciones
  sanitizeInput(input: string): string {
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}
