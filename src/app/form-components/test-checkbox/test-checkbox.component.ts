import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent {

  public about:{value:string, best:boolean}[];
  @Output() aboutArray: EventEmitter<{value:string, best:boolean}[]>;

  constructor() {
    this.about = [];
    this.aboutArray = new EventEmitter<{value:string, best:boolean}[]>();
  }

  addAbout(input:any):void {
    this.about.unshift({value:input.value, best:false});
    input.value = '';
  }



  deleteSkill(i: number) {
    this.about = this.about.filter((item,index) => index != i)
  }


  onBest(i: number, checkbox:any) {
    this.about.map((item, index) => {
      if(checkbox.checked && index === i && item.best === false){
        item.best = true;
      }
    })
  }

  saveAbout() {
    this.aboutArray.emit(this.about);
  }
}
