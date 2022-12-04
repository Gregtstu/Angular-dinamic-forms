import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent implements OnInit {

  public about: { value: string, best: boolean }[];
  public flagData: boolean;
  public editFlag: boolean;
  @Input() aboutData!: { value: string, best: boolean }[];
  @Output() aboutArray: EventEmitter<{ value: string, best: boolean }[]>;

  constructor() {
    this.about = [];
    this.aboutArray = new EventEmitter<{ value: string, best: boolean }[]>();
    this.flagData = true;
    this.editFlag = false;
  }

  ngOnInit(): void {
    if (this.aboutData) {
      this.about = this.aboutData;
      this.flagData = false;
    }

  }

  addAbout(input: any): void {
    this.about.unshift({value: input.value, best: false});
    input.value = '';
  }


  deleteSkill(i: number) {
    this.about = this.about.filter((item, index) => index != i)
  }


  onBest(i: number, checkbox: any) {
    this.about.map((item:any, index:any) => {
      if(checkbox.checked && index === i && item.best === false){
        item.best = true;
      }else if(!checkbox.checked && index === i && item.best === true) {
        item.best = false;
      }
    });
  }

  saveAbout() {
    this.aboutArray.emit(this.about);
  }

  emitChekbox() {
    this.aboutArray.emit(this.about);
    this.editFlag = true;
  }
}
