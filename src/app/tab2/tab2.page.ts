import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  login: any =new FormGroup({
   username: new FormControl('', [Validators.minLength(5),Validators.required]),
   password: new FormControl('', [
    Validators.minLength(5),
    Validators.required]),
    // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    email: new FormControl('', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$"), Validators.maxLength(60),Validators.required,]),

})

  constructor(private route: Router ,private apist:ApisService) {}

  ngOnit() {

  }

  signin() {
    console.log("successfully signin");

    if(this.login.invalid) {
      const controls = this.login.controls;
      Object.keys(controls).forEach((key)=>{
        controls[key].markAsTouched();
      })
    } else {
      const body={
        username:this.login.controls.username.value,
        email:this.login.controls.email.value,
        password:this.login.controls.password.value

  }
  this.apist.postData(body).subscribe((res)=>{
   console.log(res)
   this.route.navigateByUrl("tabs/tab1")
  })




    }

  }

}
