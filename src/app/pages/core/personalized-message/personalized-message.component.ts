import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-personalized-message',
  templateUrl: './personalized-message.component.html',
  styleUrls: ['./personalized-message.component.scss']
})
export class PersonalizedMessageComponent {
  isMessageVisible: boolean = false; // Estado para controlar la visibilidad del mensaje personalizado

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  // Alternar la visibilidad del mensaje
  toggleMessage(): void {
    this.isMessageVisible = !this.isMessageVisible;
  }

  // Cerrar el mensaje si se hace clic fuera del componente
  @HostListener('document:click', ['$event'])
  closeMessage(event: Event): void {
    const target = event.target as HTMLElement;

    if (!this.elementRef.nativeElement.contains(target)) {
      this.isMessageVisible = false;
    }
  }

  // Sanitizar cualquier texto antes de mostrarlo
  sanitizeText(input: string): string {
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}
