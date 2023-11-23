import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  //newPlayer:Player = { id: 1, name: 'Test Player', age: 25, category: 'Category A', biddingPrice: 100 };
  newPlayer
  players:Player[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
