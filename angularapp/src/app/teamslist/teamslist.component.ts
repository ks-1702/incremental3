import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute,Route, Router } from '@angular/router';

@Component({
  selector: 'app-teamslist',
  templateUrl: './teamslist.component.html',
  styleUrls: ['./teamslist.component.css']
})
export class TeamslistComponent implements OnInit {
teamdata:Team[]=[]
  constructor(private as:AdminService,ar:ActivatedRoute,route:Router) {
    this.as.getTeams().subscribe(data=>{this.teamdata.push(...data);
      
    })
   }

  ngOnInit(): void {
  }

}
