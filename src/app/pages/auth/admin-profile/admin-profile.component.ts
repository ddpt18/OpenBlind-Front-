import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent implements OnInit {

  profile!: Usuario;

  constructor() {}

  ngOnInit(): void {
    // Cargar el perfil del administrador desde LocalStorage
    const storedProfile = localStorage.getItem('adminProfile');
    if (storedProfile) {
      try {
        const parsedProfile = JSON.parse(storedProfile);
        this.profile = new Usuario(
          parsedProfile.rol,
          parsedProfile.email,
          parsedProfile.telefono,
          parsedProfile.nombres,
          parsedProfile.apellidos,
          parsedProfile.fechaNacimiento
        );
      } catch (error) {
        console.error('Error al parsear el perfil almacenado en LocalStorage:', error);
      }
    } else {
      // Si no hay datos en LocalStorage, establecer un perfil por defecto
      this.profile = new Usuario(
        'Administrador',
        'uroos.desing@gmail.com',
        '0979629719',
        'Gonzalo Alberto',
        'Ramos Rivera',
        '1999-05-26'
      );
      this.saveProfileToLocalStorage();
    }
  }

  saveProfileToLocalStorage(): void {
    try {
      localStorage.setItem('adminProfile', JSON.stringify(this.profile));
    } catch (error) {
      console.error('Error al guardar el perfil en LocalStorage:', error);
    }
  }

  updateProfile(updatedData: Partial<Usuario>): void {
    // Actualizar datos del perfil y guardarlos en LocalStorage
    Object.assign(this.profile, updatedData);
    this.saveProfileToLocalStorage();
  }
}
