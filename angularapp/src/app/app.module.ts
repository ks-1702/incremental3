import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { OrganizerComponentComponent } from './organizer-component/organizer-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AdminComponentComponent,
    OrganizerComponentComponent,
    LoginComponentComponent,
    RegistrationComponentComponent,
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
