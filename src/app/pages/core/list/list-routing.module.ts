import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalizedMessageListComponent } from './personalized-message-list/personalized-message-list.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { TouristRegistrationListComponent } from './tourist-registration-list/tourist-registration-list.component';

const routes: Routes = [
  {
    path: 'message-personalized-list',
    component: PersonalizedMessageListComponent
  },
  {
    path: 'tourist-register-list',
    component: TouristRegistrationListComponent
  },
  {
    path: 'routes-list',
    component: RoutesListComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
