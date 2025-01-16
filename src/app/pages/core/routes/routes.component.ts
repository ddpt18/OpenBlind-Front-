import { Component } from '@angular/core';
import { Ruta } from '../../models/route.model';



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

  constructor() { }

  onSubmit(): void {
    console.log('Registrar ruta:', this.route);
    // Aquí puedes agregar lógica adicional para enviar los datos a un servidor, por ejemplo.
  }

}
