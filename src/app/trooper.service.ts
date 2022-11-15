import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recruit } from './image-creator/recruit.model';

@Injectable({
  providedIn: 'root',
})

export class TrooperService {
  constructor(private http:HttpClient) {
    this.fetchTroopers() .subscribe(recruits => this.troopers = recruits)

  }

  private blankTrooper: Recruit = new Recruit('', '', '');

  public troopers : Recruit[] = [

  ];

  private stormTrooper = 0;

  nextTrooper() {
    if (this.stormTrooper === -1) {
      this.stormTrooper++;
      return this.blankTrooper;
    }

    const Strooper = this.troopers[this.stormTrooper];
    this.stormTrooper++;
    if (this.troopers.length === this.stormTrooper) {
       this.stormTrooper = -1;
    }
    return Strooper;
  }


  myRecruit : Recruit

  myTroopers : Recruit[] = []



  selectTrooper(currentTrooper: Recruit) {
    this.myTroopers.push(currentTrooper)
    this.troopers = this.troopers.filter(x => x!==currentTrooper)
    this.stormTrooper=0
    console.log (currentTrooper)


  }

  fetchTroopers(): Observable<Recruit[]> {
    return this.http.get('https://trooper-8e20e-default-rtdb.firebaseio.com/enlisted-trooper.json')
    .pipe(map(data => {
      console.log(Object.keys(data))
      return Object.keys(data).map(id => {
        const recruit = new Recruit(data[id].imagePath, data[id].name, data[id].skillsets )
        recruit.id = id
        return recruit
      })
    } ));

}



}



