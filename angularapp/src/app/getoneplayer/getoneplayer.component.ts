import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-getoneplayer',
  templateUrl: './getoneplayer.component.html',
  styleUrls: ['./getoneplayer.component.css']
})
export class GetoneplayerComponent implements OnInit {
  constructor(private as:AdminService,private ar:ActivatedRoute,private router:Router) {}
  playerdata:Player
  id:number
 
  ngOnInit(): void {
 
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.as.getonePlayer(this.id).subscribe((data:Player) => {
      this.playerdata = data;
    })
  }
 
  Show()
  {
    this.router.navigate(['/GetPlayer'])
  }

}
