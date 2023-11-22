import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Player } from '../models/player';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-getplayers',
  templateUrl: './getplayers.component.html',
  styleUrls: ['./getplayers.component.css']
})
export class GetplayersComponent implements OnInit {
playerdata:Player[]=[]
  constructor(private as:AdminService,private ar:ActivatedRoute,private route:Router) {
    
    this.as.getPlayers().subscribe(data=>{(this.playerdata.push(...data)); 
      console.log(this.playerdata)} )
   }

  ngOnInit(): void {
  }

}


playerdata:Player[]=[]
const(){
  this.as.getPlayers().subscribe(data=>{(this.playerdata.push)})

