import { Component } from '@angular/core';
import { Ruta } from '../../models/route.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss'
})
export class RoutesComponent {

  routeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.routeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      location: ['', [Validators.required, Validators.minLength(3)]],
      transportName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.routeForm.valid) {
      const routeData: Ruta = this.routeForm.value;

      // Ensure data is sanitized before saving
      const sanitizedRoute = this.sanitizeInput(routeData);

      // Retrieve existing routes from localStorage or initialize as empty
      const storedRoutes = JSON.parse(localStorage.getItem('routes') || '[]');
      
      // Add the new route to the array
      storedRoutes.push(sanitizedRoute);
      
      // Save updated routes array to localStorage
      localStorage.setItem('routes', JSON.stringify(storedRoutes));
      
      // Optional: Notify user of success
      this.showNotification('Ruta guardada correctamente.', 'success');
      
      // Reset the form after submission
      this.routeForm.reset();
    } else {
      this.showNotification('Formulario inválido', 'error');
    }
  }

  private sanitizeInput(route: Ruta): Ruta {
    return {
      id: this.generateUniqueId(),
      name: this.escapeHtml(route.name.trim()),
      location: this.escapeHtml(route.location.trim()),
      transportName: this.escapeHtml(route.transportName.trim())
    };
  }

  private escapeHtml(input: string): string {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return input.replace(/[&<>"']/g, (char) => map[char]);
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private showNotification(message: string, type: 'success' | 'error'): void {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : 'danger'}`;
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => document.body.removeChild(notification), 3000);
  }
}
