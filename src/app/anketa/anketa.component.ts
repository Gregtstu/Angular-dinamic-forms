import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../shared/services/api.service";

@Component({
  selector: 'app-anketa',
  templateUrl: './anketa.component.html',
  styleUrls: ['./anketa.component.scss']
})
export class AnketaComponent implements OnInit{

  public mainForm!: FormGroup;
  public workArray!: any;

  constructor(private apiServ: ApiService) {
  }

  ngOnInit(): void {
    this.mainForm = new FormGroup({
      nameUser: new FormControl('', Validators.required),
      worksUser: new FormArray([]),
      moneyUser: new FormArray([]),
      skillsUser: new FormArray([]),
      aboutUser: new FormArray([]),
    });
  }

  addWorks(works:any):void {
    this.mainForm.value.worksUser = works.works;
  }

  addMoney(money: any) {
    this.mainForm.value.moneyUser = money.money;
  }

  addSkills(skills: {best:boolean, value: string}[]) {
    this.mainForm.value.skillsUser = skills;
  }


  addAbout(about: {value:string, best:boolean}[]) {
    this.mainForm.value.aboutUser = about;
  }

  submit() {
    if(this.mainForm.value){
      this.apiServ.post(this.mainForm.value)
        .subscribe({
          next: (res) => {
            alert('Ваша анкета успешно отправлена на сервер!');
            this.mainForm.reset();
          },
          error: (er) => {
            alert('Возникла ошибка!');
          }
        })
    }
  }

}
