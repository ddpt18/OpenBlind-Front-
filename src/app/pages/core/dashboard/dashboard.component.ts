import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isDropdownOpen: boolean = false; // Variable para controlar el estado del dropdown

  // Alternar el estado del dropdown al hacer clic en el botón
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Cerrar el dropdown si se hace clic fuera de él
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    const dropdownButton = document.getElementById('dropdownUsuarios');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const target = event.target as HTMLElement;

    if (dropdownButton && dropdownMenu) {
      if (!dropdownButton.contains(target) && !dropdownMenu.contains(target)) {
        this.isDropdownOpen = false;
      }
    }
  }
}
