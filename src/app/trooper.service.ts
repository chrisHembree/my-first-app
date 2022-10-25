import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrooperService {

  constructor() { }

troopers = [ "https://cdn.shoplightspeed.com/shops/609450/files/10242899/image.jpg",
// black hole stormtrooper
"https://th.bing.com/th/id/OIP.yNx8LhmN8xBVonzQ-rGXZwHaMI?pid=ImgDet&w=480&h=786&rs=1",
// hardened veteran with cape
"https://th.bing.com/th/id/R.4b65165122e5a46a06a97bec0f992b98?rik=5yw3BvQInW7OeQ&riu=http%3a%2f%2fconceptartworld.com%2fwp-content%2fuploads%2f2016%2f02%2fStar_Wars_The_Force_Awakens_Concept_Art_CA-Stormtrooper_04.jpg&ehk=dr2xVsPHrMZ68L8vvEy1%2fboMRHEnqHJkVGr%2bXiPSJzw%3d&risl=&pid=ImgRaw&r=0",
//  sci fi grey colored armor sleek and cape
"https://th.bing.com/th/id/R.fa2579ad01362f99f1922f884b170a90?rik=qgiPK22lzoeXGw&riu=http%3a%2f%2fconceptartworld.com%2fwp-content%2fuploads%2f2016%2f02%2fStar_Wars_The_Force_Awakens_Concept_Art_CA-Stormtrooper_02-680x1051.jpg&ehk=2oKmuOnrb5KUwLtJpPpjwGJ5o9CfcyCMssBuVOC48Yo%3d&risl=&pid=ImgRaw&r=0",
// red arm stripe angular theme
"https://theplatypusnews.com/wp-content/uploads/2020/07/stormtroopers-art_1570395239-1024x576.jpg",
// first order squad
"https://www.bing.com/images/blob?bcid=SFwIskXbIb4EzA",
// death trooper
  "https://wallpapercave.com/wp/wp6511671.jpg",
  // ultra sci fi holographic sights tooper
"https://cdna.artstation.com/p/assets/images/images/005/758/512/large/filipe-ferreira-stormtroopers-final.jpg?1493573281",
// fake stormtroopers
"https://i.redd.it/h56ssox8r1oz.jpg",
// heavy weapons stormtrooper]
]

stormTrooper = 0

displayImage() {

if (this.stormTrooper >= this.troopers.length-1) {
  this.stormTrooper = 0

}else{this.stormTrooper++

}




}





}

