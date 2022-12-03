import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent {
  public selectedValue!: string;
  public skills: {best: boolean, value: string}[];
  @Output() skillsArray: EventEmitter<{best: boolean, value: string}[]>;

  constructor() {
    this.skillsArray = new EventEmitter<{best: boolean, value: string}[]>();
    this.skills = [];
  }

  addSelect(inputValue: HTMLInputElement):void {
    this.skills.push({best: false, value: inputValue.value});
    inputValue.value = '';
    this.skillsArray.emit(this.skills);
  }

  removeOption(i: number) {
    this.skills = this.skills.filter((item, index) => index != i);
  }

  cencel() {
    this.skills = [];
  }

  onBest(i: number) {
    this.skills.map((item, index) => {
      if(index === i && item.best === false){
        item.best = true;
      } else {
        item.best = false;
      }
    })
  }
}
