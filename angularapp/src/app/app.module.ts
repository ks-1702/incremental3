import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetplayersComponent } from './getplayers/getplayers.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GetplayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
