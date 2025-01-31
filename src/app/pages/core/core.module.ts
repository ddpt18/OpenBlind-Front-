import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalizedMessageListComponent } from './list/personalized-message-list/personalized-message-list.component';
import { RoutesListComponent } from './list/routes-list/routes-list.component';
import { PersonalizedMessageComponent } from './personalized-message/personalized-message.component';
import { RoutesComponent } from './routes/routes.component';
import { VoiceGuideComponent } from './voice-guide/voice-guide.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TouristRegistrationComponent } from './tourist-registration/tourist-registration.component';



@NgModule({
  declarations: [
    DashboardComponent,
    RoutesComponent,
    PersonalizedMessageComponent,
    VoiceGuideComponent,
    RoutesListComponent,
    PersonalizedMessageListComponent,
    TouristRegistrationComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
