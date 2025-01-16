import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalizedMessageListComponent } from './list/personalized-message-list/personalized-message-list.component';
import { PointInterestListComponent } from './list/point-interest-list/point-interest-list.component';
import { RoutesListComponent } from './list/routes-list/routes-list.component';
import { VoiceGuideListComponent } from './list/voice-guide-list/voice-guide-list.component';
import { PersonalizedMessageComponent } from './personalized-message/personalized-message.component';
import { PointInterestComponent } from './point-interest/point-interest.component';
import { RoutesComponent } from './routes/routes.component';
import { VoiceGuideComponent } from './voice-guide/voice-guide.component';



@NgModule({
  declarations: [
    DashboardComponent,
    RoutesComponent,
    PersonalizedMessageComponent,
    PointInterestComponent,
    VoiceGuideComponent,
    RoutesListComponent,
    PersonalizedMessageListComponent,
    PointInterestListComponent,
    VoiceGuideListComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
