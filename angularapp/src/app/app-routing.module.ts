import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetplayersComponent } from './getplayers/getplayers.component';
import { AddplayersComponent } from './addplayers/addplayers.component';
import { EditplayersComponent } from './editplayers/editplayers.component';
import { DeleteplayersComponent } from './deleteplayers/deleteplayers.component';


const routes: Routes = [
  {path:'GetPlayer',component:GetplayersComponent},
  {path:'AddPlayer',component:AddplayersComponent},
  {path:'GetPlayer/:id',component:GetplayersComponent},
  {path:'EditPlayer/:id',component:EditplayersComponent},
  {path:'DeletePlayer/:id',component:DeleteplayersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
