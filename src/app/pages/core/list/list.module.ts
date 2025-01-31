import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { TouristRegistrationListComponent } from './tourist-registration-list/tourist-registration-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserListComponent,
    TouristRegistrationListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListModule { }
