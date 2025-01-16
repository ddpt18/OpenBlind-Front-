import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'open-blind-front';
  mostrarSidebar = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const rutasSinSidebar = ['/auth/login', '/auth/register'];
        this.mostrarSidebar = !rutasSinSidebar.includes(event.urlAfterRedirects);
      }
    });
  }
}
