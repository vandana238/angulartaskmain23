import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  email: any;
  password:any;
  formData: any =new FormGroup({
    email: new FormControl('', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$"), Validators.maxLength(60),Validators.required,]),
    password: new FormControl('', [
     Validators.minLength(5),
     Validators.required]),
 })

  constructor(private route: Router,private aps:ApisService) {}


  login() {
    const emailData = this.formData.controls.email.value;
    const passwordData = this.formData.controls.password.value;
     console.log(emailData,passwordData,"check")
    if (this.formData.invalid) {
      const controls = this.formData.controls;
      Object.keys(controls).forEach((key) => {
        controls[key].markAsTouched();
      });
    } else {
      this.aps.getData().subscribe((res: any) => {
        console.log(res, 'res');
        let validUser = res.find((user: any) => user.email === emailData && user.password === passwordData);

        if (validUser) {
          localStorage.setItem("token",JSON.stringify(validUser))
          sessionStorage.setItem("token",JSON.stringify(validUser))

          this.route.navigateByUrl('tabs/tab3');
        } else {
          alert('Invalid Inputs');
        }
      });
    }
  }


}



