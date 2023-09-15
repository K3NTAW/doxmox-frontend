import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { SpaceViewComponent } from './space-view/space-view.component';
import { SubspaceViewComponent } from './subspace-view/subspace-view.component';
import { SettingsViewComponent } from './settings-view/settings-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteViewComponent,
    TeamViewComponent,
    SpaceViewComponent,
    SubspaceViewComponent,
    SettingsViewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
