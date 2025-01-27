import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isDropdownOpen: boolean = false; // Estado del dropdown

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  // Alternar el estado del dropdown al hacer clic en el botón
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Cerrar el dropdown si se hace clic fuera de él
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    const target = event.target as HTMLElement;

    // Verifica si el clic fue fuera del componente actual
    if (!this.elementRef.nativeElement.contains(target)) {
      this.isDropdownOpen = false;
    }
  }

  // Método adicional para generar un valor seguro en caso de necesitarlo
  sanitizeInput(input: string): string {
    const sanitized = input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return sanitized;
  }
}
