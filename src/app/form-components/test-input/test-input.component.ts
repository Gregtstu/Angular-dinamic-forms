import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {

  public formInput!: FormGroup;
  @Output() worksArray: EventEmitter<string[]>;


  constructor() {
    this.worksArray = new EventEmitter<string[]>();

  }
  ngOnInit(): void {
    this.formInput = new FormGroup<any>({
      works: new FormArray([], Validators.required)
    });

  }

  addWork(){
    const control = new FormControl('', Validators.required);
    (this.formInput.get('works') as FormArray).push(control);
  }
  getControls() {
    return (this.formInput.get('works') as FormArray).controls;
  }

  saveWork() {
    this.worksArray.emit(this.formInput.value);
  }

  remove(i:number) {
    (this.formInput.get('works') as FormArray).removeAt(i);
  }
}
