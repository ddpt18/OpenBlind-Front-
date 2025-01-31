import { Component, OnInit } from '@angular/core';
import { Ruta } from '../../../models/route.model';

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrl: './routes-list.component.scss'
})
export class RoutesListComponent implements OnInit{
  routes: Ruta[] = [];  // Array to store route data

  constructor() {}

  ngOnInit(): void {
    // Load routes from localStorage when the component initializes
    this.routes = this.getRoutesFromLocalStorage();
  }

  private getRoutesFromLocalStorage(): Ruta[] {
    const storedRoutes = localStorage.getItem('routes');
    return storedRoutes ? JSON.parse(storedRoutes) : [];
  }

}
