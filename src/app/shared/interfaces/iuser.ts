import {FormArray, FormControl, Validators} from "@angular/forms";

export interface IUser {
  id?:string | undefined;
  nameUser: string;
  worksUser: string[];
  moneyUser: number[];
  skillsUser:  {value:string, best:boolean}[];
  aboutUser: {value:string, best:boolean}[];
}
