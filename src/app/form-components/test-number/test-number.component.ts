import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent implements OnInit {

  public formNumber!: FormGroup;
  public flagData: boolean;
  public editFlag: boolean;
  @Output() moneyArray: EventEmitter<number[]>;
  @Output() moneyArrayData: EventEmitter<string[]>;
  @Input() money!: number[];

  constructor() {
    this.moneyArray = new EventEmitter<number[]>();
    this.moneyArrayData = new EventEmitter<string[]>();
    this.flagData = true;
    this.editFlag = false;
  }

  ngOnInit(): void {
    this.formNumber = new FormGroup({
      money: new FormArray([])
    });

    if (this.money) {
      this.flagData = false;
      for (let i = 0; i < this.money.length; i++) {
        (this.formNumber.get('money') as FormArray).insert(i, new FormControl(''));
      }
      this.formNumber.controls['money'].patchValue(this.money);
    }
  }

  addMoney(): void {
    const control = new FormControl('', Validators.required);
    (this.formNumber.get('money') as FormArray).push(control);
  }

  getControls() {
    return (this.formNumber.get('money') as FormArray).controls;
  }

  saveMoney() {
    if (!this.flagData) {
      this.moneyArrayData.emit(this.formNumber.value.money);
      this.editFlag = true;
    }
    this.moneyArray.emit(this.formNumber.value);
  }


  remove(i: number) {
    (this.formNumber.get('money') as FormArray).removeAt(i);
  }
}
