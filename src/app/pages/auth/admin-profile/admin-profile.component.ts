import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent {

  profiles={ 
     rol: "Administrador" ,
     email: "uroos.desing@gmail.com" ,
     telefono: "0979629719",
     nombres:"Gonzalo Alberto" ,
     apellidos:"Ramos Rivera",
     fechaNacimiento:"1999-05-26"
  }
  profile = new Usuario('Administrador', 'uroos.desing@gmail.com', '0979629719', 'Gonzalo Alberto', 'Ramos Rivera', '1999-05-26');


}
