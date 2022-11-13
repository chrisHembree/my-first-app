import { Component, OnInit } from '@angular/core';
import { TrooperService } from '../trooper.service';


@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.css']
})
export class MyteamComponent implements OnInit {



  constructor(public trooperService: TrooperService) {  }

  ngOnInit(): void {
  }



}

