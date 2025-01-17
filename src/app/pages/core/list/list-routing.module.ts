import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalizedMessageListComponent } from './personalized-message-list/personalized-message-list.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { PointInterestListComponent } from './point-interest-list/point-interest-list.component';
import { VoiceGuideListComponent } from './voice-guide-list/voice-guide-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'message-personalized-list',
    component: PersonalizedMessageListComponent
  },
  {
    path: 'point-interest-list',
    component: PointInterestListComponent
  },
  {
    path: 'routes-list',
    component: RoutesListComponent
  },
  {
    path: 'voice-guide-list',
    component: VoiceGuideListComponent
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
