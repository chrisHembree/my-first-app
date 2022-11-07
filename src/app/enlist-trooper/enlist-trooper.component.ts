import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { TrooperService } from '../trooper.service';

@Component({
  selector: 'app-enlist-trooper',
  templateUrl: './enlist-trooper.component.html',
  styleUrls: ['./enlist-trooper.component.css']
})
export class EnlistTrooperComponent implements OnInit {

  constructor(private trooperService: TrooperService) { }

  ngOnInit(): void {
  }
  onEnlist(form: NgForm) {
    console.log(form.value)
   this.trooperService.troopers.push(form.value)
  }
}
