export interface Ruta {
  id: string;
  name: string;
  location: string;
  transportName: string;
  coordinates?: L.LatLng[]; // Agregar esta propiedad para almacenar las coordenadas
}
