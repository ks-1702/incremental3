import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-getplayers',
  templateUrl: './getplayers.component.html',
  styleUrls: ['./getplayers.component.css']
})
export class GetplayersComponent implements OnInit {
playerdata:Player[]=[]
  constructor(private as:AdminService) {
    this.as.getPlayers().subscribe(data=>{this.playerdata.push(...data)})
    console.log(this.playerdata)
   }

  ngOnInit(): void {
  }

}
