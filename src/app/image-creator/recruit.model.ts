export class Recruit {
  public imagePath: string;
  public name: string;
  public skillsets: string;


  constructor (imagePath: string, name: string, skillsets: string) {
    this.imagePath = imagePath;
    this.name = name;
    this.skillsets = skillsets
  }
}
