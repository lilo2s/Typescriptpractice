export class Pet {
  animalType: string;
  name: string;
  ownerName: string;
  livingSp: number;
  careTime: number;
  walkNeed: boolean;
  careCost: number;

  constructor (animalType: string, name: string, ownerName: string, livingSp: number, careTime: number, walkNeed: boolean, careCost: number){
    this.animalType = animalType;
    this.name = name;
    this.ownerName = ownerName;
    this.livingSp = livingSp;
    this.careTime = careTime;
    this.walkNeed = walkNeed;
    this.careCost = careCost;
  }
}
