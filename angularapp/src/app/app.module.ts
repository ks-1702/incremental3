import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetplayersComponent } from './getplayers/getplayers.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { EditplayersComponent } from './editplayers/editplayers.component';
import { GetoneplayerComponent } from './getoneplayer/getoneplayer.component';
import { DeleteplayersComponent } from './deleteplayers/deleteplayers.component';
import { TeamslistComponent } from './teamslist/teamslist.component';


@NgModule({
  declarations: [
    AppComponent,
    GetplayersComponent,
    AddplayersComponent,
    EditplayersComponent,
    GetoneplayerComponent,
    DeleteplayersComponent,
    TeamslistComponent
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
