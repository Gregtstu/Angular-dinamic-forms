import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl} from "@angular/forms";

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {
  public selectedValue!: string;
  public skills: { best: boolean, value: string }[];
  public flagData: boolean;
  public editFlag: boolean;
  @Input() skillsdata!: { best: boolean, value: string }[];
  @Output() skillsArray: EventEmitter<{ best: boolean, value: string }[]>;
  @Output() skillsArrayData: EventEmitter<{ best: boolean, value: string }[]>;

  constructor() {
    this.skillsArray = new EventEmitter<{ best: boolean, value: string }[]>();
    this.skillsArrayData = new EventEmitter<{ best: boolean, value: string }[]>();
    this.skills = [];
    this.flagData = true;
    this.editFlag = false;
  }

  ngOnInit(): void {

    if (this.skillsdata) {
      this.flagData = false;
      this.skills = this.skillsdata;
    }
  }

  addSelect(inputValue: any): void {
    this.skills.push({best: false, value: inputValue.value});
    inputValue.value = '';
    this.skillsArray.emit(this.skills);
  }

  emitSelect() {
    this.skillsArrayData.emit(this.skills);
    this.editFlag = true;
  }

  removeOption(i: number) {
    this.skills = this.skills.filter((item, index) => index != i);
  }

  cencel() {
    this.skills = [];
  }

  onBest(i: number) {
    this.skills.map((item, index) => {
      if (index === i && item.best === false) {
        item.best = true;
      } else {
        item.best = false;
      }
    })
  }

}
