import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  title = 'navbar';

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    const mainContent = document.querySelector('.main-content') as HTMLElement;
    const toggleIcon = document.querySelector('.rotate-icon') as HTMLElement;

    if (sidebar && mainContent && toggleIcon) {
      sidebar.classList.toggle('collapsed');
      mainContent.classList.toggle('collapsed');
      toggleIcon.classList.toggle('rotate');
    }
  }

}
