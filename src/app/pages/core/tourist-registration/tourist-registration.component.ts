import { Component, OnInit } from '@angular/core';
declare let L: any; 

@Component({
  selector: 'app-tourist-registration',
  templateUrl: './tourist-registration.component.html',
  styleUrls: ['./tourist-registration.component.scss'],
})
export class TouristRegistrationComponent implements OnInit {
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
      const input = document.getElementById('ubicacion') as HTMLInputElement;
      input.value = `${lat}, ${lng}`;
    });
  }
}
