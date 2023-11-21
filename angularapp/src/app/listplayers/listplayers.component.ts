import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { IPlayer } from '../models/iplayer';
 
@Component({
  selector: 'app-listplayers',
  templateUrl: './listplayers.component.html',
  styleUrls: ['./listplayers.component.css']
})
export class ListplayersComponent implements OnInit {
 
  players: IPlayer[] = []
 
  constructor(private ps:AdminService) {
    this.ps.getAllPlayers().subscribe(data=>{this.players.push(...data)})
    console.log(this.players);
  }
 
  ngOnInit(): void {
  }
 
}