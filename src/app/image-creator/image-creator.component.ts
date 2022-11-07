import { Component, OnInit } from '@angular/core';
import { TrooperService } from '../trooper.service';
import { Recruit } from './recruit.model';

@Component({
  selector: 'app-image-creator',
  templateUrl: './image-creator.component.html',
  styleUrls: ['./image-creator.component.css'],
})
export class ImageCreatorComponent implements OnInit {
  currentTrooper: Recruit = new Recruit("", "","");

  constructor(public trooperService: TrooperService) {}

  ngOnInit() {
    // Get a trooper from service and assign that to currentTroop

  }
}


