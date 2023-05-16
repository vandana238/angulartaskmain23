import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  title:number | undefined;
add()
{
this.title=1000;
localStorage.setItem("token",JSON.stringify(this.title))
localStorage.getItem("token")
}

Remove(){
  localStorage.removeItem("token")
}


}


