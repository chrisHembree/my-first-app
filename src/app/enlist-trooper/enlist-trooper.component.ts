import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrooperService } from '../trooper.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enlist-trooper',
  templateUrl: './enlist-trooper.component.html',
  styleUrls: ['./enlist-trooper.component.css'],
})
export class EnlistTrooperComponent implements OnInit {
  constructor(
    private trooperService: TrooperService,
    private http: HttpClient
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
      imagepath: trooperUrl,
    };

    this.http
      .post(
        'https://trooer-8e20e-default-rtdb.firebaseio.com/enlisted-troopers',
        postTrooper
      )

      .subscribe();

    this.trooperService.troopers.push(form.value);
  }
}
