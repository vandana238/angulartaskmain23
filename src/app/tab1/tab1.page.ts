import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { IonItemGroup } from '@ionic/angular';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

data: any;
key: any;
  @ViewChildren(IonItemGroup, { read: ElementRef })
  itemGroups!: QueryList<any>;
scroll =false;

   constructor() {
// const sorted =this.data.sort((a: { last_name: number; },b: { last_name: number; })=>{
//   if(a.last_name <b.last_name){
//     return -1;
//   }
//  if(a.last_name > b.last_name) {
//   return 1;
//  }
// return 0;

// })
// let last =null
}

scrollToLetter(letter: any){
  for(let i=0;i< this.data.length;i++){
    const group =this.data[i];
    if(group.key =letter){
      const group = this.itemGroups.filter((element,index) =>index==i);
      if(group && group.length >0){
        const el =group [0];
        el.nativeElement.scrollIntoView();
      }
      return;
    }
  }
}

letterscrollActive(active: boolean) {
this.scroll =active;
}

}
