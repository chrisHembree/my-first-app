import { Injectable } from '@angular/core';
import { Recruit } from './image-creator/recruit.model';

@Injectable({
  providedIn: 'root',
})

export class TrooperService {
  constructor() {}

  private blankTrooper: Recruit = new Recruit('', '', '');

  public troopers : Recruit[] = [
    {
      imagePath:
        'https://cdn.shoplightspeed.com/shops/609450/files/10242899/image.jpg',
      name: 'Black Hole Trooper',
      skillsets: 'Voidcombat',
    },

    {
      imagePath:
        'https://th.bing.com/th/id/OIP.yNx8LhmN8xBVonzQ-rGXZwHaMI?pid=ImgDet&w=480&h=786&rs=1',
      name: 'Veteran NonComissionedOfficer',
      skillsets: 'op leadership',
    },

    {
      imagePath:
        'https://th.bing.com/th/id/R.4b65165122e5a46a06a97bec0f992b98?rik=5yw3BvQInW7OeQ&riu=http%3a%2f%2fconceptartworld.com%2fwp-content%2fuploads%2f2016%2f02%2fStar_Wars_The_Force_Awakens_Concept_Art_CA-Stormtrooper_04.jpg&ehk=dr2xVsPHrMZ68L8vvEy1%2fboMRHEnqHJkVGr%2bXiPSJzw%3d&risl=&pid=ImgRaw&r=0',
      name: 'Operator',
      skillsets: 'Infiltration',
    },

    {
      imagePath:
        'https://th.bing.com/th/id/R.fa2579ad01362f99f1922f884b170a90?rik=qgiPK22lzoeXGw&riu=http%3a%2f%2fconceptartworld.com%2fwp-content%2fuploads%2f2016%2f02%2fStar_Wars_The_Force_Awakens_Concept_Art_CA-Stormtrooper_02-680x1051.jpg&ehk=2oKmuOnrb5KUwLtJpPpjwGJ5o9CfcyCMssBuVOC48Yo%3d&risl=&pid=ImgRaw&r=0',
      name: 'Executive Guard',
      skillsets: 'ViP protction/urban movement',
    },

    {
      imagePath:
        'https://theplatypusnews.com/wp-content/uploads/2020/07/stormtroopers-art_1570395239-1024x576.jpg',
      name: 'Echo Squad',
      skillsets: 'Fire and Maneuver',
    },

    {
      imagePath: 'https://th.bing.com/th/id/R.47033892a237607c184493f74faffcd4?rik=tr7pOf2WhBvY9w&pid=ImgRaw&r=0',
      name: 'Death Trooper',
      skillsets: 'Executive Neutralization',
    },

    {
      imagePath: 'https://wallpapercave.com/wp/wp6511671.jpg',
      name: 'Special Detachment Alpha',
      skillsets: 'Distance Precision Engagement',
    },

    {
      imagePath:
        'https://cdna.artstation.com/p/assets/images/images/005/758/512/large/filipe-ferreira-stormtroopers-final.jpg?1493573281',
      name: 'Pseudo troopers',
      skillsets: 'Faking it',
    },

    {
      imagePath: 'https://i.redd.it/h56ssox8r1oz.jpg',
      name: 'Heavy Weapons Trooper',
      skillsets: 'Heavy Ordinance Deployment',
    },
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



}



