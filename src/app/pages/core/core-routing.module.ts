import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalizedMessageComponent } from './personalized-message/personalized-message.component';
import { RoutesComponent } from './routes/routes.component';
import { VoiceGuideComponent } from './voice-guide/voice-guide.component';
import { TouristRegistrationComponent } from './tourist-registration/tourist-registration.component';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: ()=> import('./list/list.module').then(m => m.ListModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'personalized-message',
    component: PersonalizedMessageComponent
  },
  {
    path: 'tourist-registration',
    component: TouristRegistrationComponent
  },
  {
    path: 'routes',
    component: RoutesComponent
  },
  {
    path: 'voice-guide',
    component: VoiceGuideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
