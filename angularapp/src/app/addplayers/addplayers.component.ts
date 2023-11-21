import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrls: ['./addplayers.component.css']
})
export class AddplayersComponent implements OnInit {
  playerdata:Player={id:0,name:'',age:0,category:'',biddingPrice:0,teamid:0}

  constructor(private as:AdminService,private route:Router) { }

  ngOnInit(): void {
  }

}
