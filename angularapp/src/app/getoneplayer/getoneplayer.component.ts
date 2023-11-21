import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-getoneplayer',
  templateUrl: './getoneplayer.component.html',
  styleUrls: ['./getoneplayer.component.css']
})
export class GetoneplayerComponent implements OnInit {
// playerdata:Player
// id:number
//   constructor(private as:AdminService,private ar:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    // const tid=this.ar.snapshot.paramMap.get('id')
    // this.id=Number(tid)
  }

}
