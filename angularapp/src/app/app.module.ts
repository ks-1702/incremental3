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
import { HomeComponent } from './home/home.component';
import { FindteamComponent } from './findteam/findteam.component';
import { EditteamComponent } from './editteam/editteam.component';
import { DeleteteamComponent } from './deleteteam/deleteteam.component';
import { AddteamComponent } from './addteam/addteam.component';


@NgModule({
  declarations: [
    AppComponent,
    GetplayersComponent,
    AddplayersComponent,
    EditplayersComponent,
    GetoneplayerComponent,
    DeleteplayersComponent,
    TeamslistComponent,
    HomeComponent,
    FindteamComponent,
    EditteamComponent,
    DeleteteamComponent,
    AddteamComponent
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
