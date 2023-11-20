import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { OrganizerComponentComponent } from './organizer-component/organizer-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { DisplayplayerComponent } from './displayplayer/displayplayer.component';
import { ListplayerComponent } from './listplayer/listplayer.component';
import { DeleteplayerComponent } from './deleteplayer/deleteplayer.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { EditplayerComponent } from './editplayer/editplayer.component';
import { ListplayersComponent } from './listplayers/listplayers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AdminComponentComponent,
    OrganizerComponentComponent,
    LoginComponentComponent,
    RegistrationComponentComponent,
    ErrorComponentComponent,
    DisplayplayerComponent,
    ListplayerComponent,
    DeleteplayerComponent,
    AddplayerComponent,
    EditplayerComponent,
    ListplayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
