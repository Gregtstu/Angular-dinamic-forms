import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent implements OnInit{

  public formNumber!: FormGroup;
  @Output() moneyArray: EventEmitter<any>;


  constructor() {
    this.moneyArray = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.formNumber = new FormGroup<any>({
      money: new FormArray([])
    });
  }

  addMoney():void{
    const control = new FormControl('', Validators.required);
    (this.formNumber.get('money') as FormArray).push(control);
  }
  getControls() {
    return (this.formNumber.get('money') as FormArray).controls;
  }

  saveMoney() {
    this.moneyArray.emit(this.formNumber.value);
  }

  remove(i:number) {
    (this.formNumber.get('money') as FormArray).removeAt(i);
  }
}
