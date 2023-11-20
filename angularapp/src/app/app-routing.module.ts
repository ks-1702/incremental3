import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListplayerComponent } from './listplayer/listplayer.component';

const routes: Routes = [
  {path:'listplayers',component:ListplayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
