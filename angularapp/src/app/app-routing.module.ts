import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetplayersComponent } from './getplayers/getplayers.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { EditplayersComponent } from './editplayers/editplayers.component';
import { DeleteplayersComponent } from './deleteplayers/deleteplayers.component';
import { GetoneplayerComponent } from './getoneplayer/getoneplayer.component';
import { TeamslistComponent } from './teamslist/teamslist.component';
import { FindteamComponent } from './findteam/findteam.component';
import { EditteamComponent } from './editteam/editteam.component';
import { DeleteteamComponent } from './deleteteam/deleteteam.component';
import { AddteamComponent } from './addteam/addteam.component';


const routes: Routes = [
  {path:'GetPlayer',component:GetplayersComponent},
  {path:'AddPlayer',component:AddplayersComponent},
  {path:'GetPlayer/:id',component:GetoneplayerComponent},
  {path:'EditPlayer/:id',component:EditplayersComponent},
  {path:'DeletePlayer/:id',component:DeleteplayersComponent},
  {path:'ListTeams',component:TeamslistComponent},
  {path:'DisplayTeams/:id',component:FindteamComponent},
  {path:'AddTeam',component:AddteamComponent},
  {path:'EditTeam/:id',component:EditteamComponent},
  {path:'DeleteTeam/:id',component:DeleteteamComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
