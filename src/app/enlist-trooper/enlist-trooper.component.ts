import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrooperService } from '../trooper.service';
import { HttpClient } from '@angular/common/http';
import { Recruit } from '../image-creator/recruit.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-enlist-trooper',
  templateUrl: './enlist-trooper.component.html',
  styleUrls: ['./enlist-trooper.component.css'],
})
export class EnlistTrooperComponent implements OnInit {
  constructor(
    private trooperService: TrooperService,
    public http: HttpClient
  ) {}

  ngOnInit(): void {}
  onEnlist(form: NgForm) {
    console.log(form.value);
    const trooperName = form.value.name;
    const trooperSkillsets = form.value.skillsets;
    const trooperUrl = form.value.imagePath;

    const postTrooper = {
      name: trooperName,
      skillsets: trooperSkillsets,
      imagePath: trooperUrl,
    };


    this.http
      .post(
        'https://trooper-8e20e-default-rtdb.firebaseio.com/enlisted-trooper.json',
        postTrooper
      ).subscribe();

    this.trooperService.troopers.push(form.value);


    }

}
