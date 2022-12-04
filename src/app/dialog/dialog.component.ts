import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IUser} from "../shared/interfaces/iuser";
import {ApiService} from "../shared/services/api.service";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public form!: FormGroup;
  constructor(
    private apiServ:ApiService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: IUser
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nameUser: new FormControl('', Validators.required),
      worksUser: new FormArray([]),
      moneyUser: new FormArray([]),
      skillsUser: new FormArray([]),
      aboutUser: new FormArray([]),
    });

    if (this.editData) {
      for (let i = 0; i < this.editData.worksUser.length; i++) {
        (this.form.get('worksUser') as FormArray).insert(i, new FormControl(''));
      }
      for (let i = 0; i < this.editData.moneyUser.length; i++) {
        (this.form.get('moneyUser') as FormArray).insert(i, new FormControl(''));
      }
      for (let i = 0; i < this.editData.skillsUser.length; i++) {
        (this.form.get('skillsUser') as FormArray).insert(i, new FormControl(''));
      }
      for (let i = 0; i < this.editData.aboutUser.length; i++) {
        (this.form.get('aboutUser') as FormArray).insert(i, new FormControl(''));
      }

      this.form.controls['nameUser'].setValue(this.editData.nameUser);
      this.form.controls['worksUser'].setValue(this.editData.worksUser);
      this.form.controls['moneyUser'].patchValue(this.editData.moneyUser);
      this.form.controls['skillsUser'].patchValue(this.editData.skillsUser);
      this.form.controls['aboutUser'].patchValue(this.editData.aboutUser);
    }
  }

  addWorks(works:any) {
    this.form.value.worksUser = works;
  }

  addMoney(money: any) {
    this.form.value.moneyUser = money;
  }

  addskills(skills: any) {
    this.form.value.skillsUser = skills;
  }

  addAbout(about: { value: string; best: boolean }[]) {
    this.form.value.aboutUser = about;
  }

  subbmit() {
    this.apiServ.put(this.form.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert('Анкета успешно изменена!');
          this.dialogRef.close('update')
        }
      });
  }

}
