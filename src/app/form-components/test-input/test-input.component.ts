import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {

  public formInput!: FormGroup;
  public flagData: boolean;
  public editFlag: boolean;
  @Output() worksArray: EventEmitter<string[]>;
  @Output() worksArrayData: EventEmitter<string[]>;
  @Input() works!: string[];

  constructor() {
    this.worksArray = new EventEmitter<string[]>();
    this.worksArrayData = new EventEmitter<string[]>();
    this.flagData = true;
    this.editFlag = false;
  }

  ngOnInit(): void {
    this.formInput = new FormGroup({
      works: new FormArray([], Validators.required)
    });
    if (this.works) {
      this.flagData = false;
      for (let i = 0; i < this.works.length; i++) {
        (this.formInput.get('works') as FormArray).insert(i, new FormControl(''));
      }
      this.formInput.controls['works'].patchValue(this.works);

    }


  }

  addWork() {
    const control = new FormControl('', Validators.required);
    (this.formInput.get('works') as FormArray).push(control);
  }

  getControls() {
    return (this.formInput.get('works') as FormArray).controls;
  }

  saveWork() {
    if (!this.flagData) {
      this.worksArrayData.emit(this.formInput.value.works);
      this.editFlag = true;
    }

    this.worksArray.emit(this.formInput.value);
  }

  remove(i: number) {
    (this.formInput.get('works') as FormArray).removeAt(i);
  }
}
