import {Pet} from './pets';

export class Owner {
  name: string;
  propertySp: number;
  petBudget: number;
  freeTime: number;
  activityWill: boolean;
  livingSp: number;

  constructor (name: string, propertySp: number, petBudget: number, freeTime:number, activityWill: boolean, livingSp: number ){
    this.name = name;
    this.propertySp = propertySp;
    this.petBudget = petBudget;
    this.freeTime = freeTime;
    this.activityWill = activityWill;
    this.livingSp = livingSp;
  }

  petSort(pets: Array<Pet> ){
    for (let i = 0; i < pets.length; i++) {
        console.log(pets[i]);
    }
  }

}
