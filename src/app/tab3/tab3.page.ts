import { Component } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  form: any;
  data: any;
  real: any;
  showForm: any;
  formHeader: any;
  username: any;
  email: any;
  password: any;
  userdata: any;
  datamethod = {
    name: '',
    email: '',
    phone: '',
  };

  savebtn: boolean | undefined;
  changesbtn: boolean | undefined;

  constructor(private apis: ApisService) {}

  ngOnInit(): void {
    this.getdetail();
  }
  getdetail() {
    this.apis.getData().subscribe((data: any) => {
      this.real = data;
      console.log(data, 'check');
    });
  }

  addData() {
    this.savebtn = false;
    this.changesbtn = false;
    const body = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    this.apis.postData(body).subscribe((data: any) => {
      this.real.push(data);
      this.username = '';
      this.email = '';
      this.password = '';
    });
  }

  openForm(data: any) {
    this.clearForm();
    this.showForm = true;
    if (data) {
      this.savebtn = true;
      this.changesbtn = false;
      this.username = data.username;
      this.email = data.email;
      this.password = data.password;

      this.formHeader = 'Edit Data';
      console.log(data, 'test');
    } else {
      this.userdata = {};
      this.formHeader = 'Add Data';
      this.savebtn = false;
      this.changesbtn = true;
    }
  }

  closeForm() {
    this.showForm = false;
    this.clearForm();
  }

  clearForm() {
    this.username = null;
    this.email = null;
    this.password = null;
  }

  deleteData(username: any) {
    this.apis.deletedata(username).subscribe((res) => {
      setTimeout(() => {
        this.getdetail();
      }, 2000);

     localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    });
  }

  savedata() {
    let body = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    console.log(body, 'body');

    if (this.username) {
      var params = {
        username: this.username,
      };
      // Editing existing data
      this.apis.putData(body, params).subscribe((res) => {
        // Find the index of the edited data in the real array and update it
        const index = this.real.findIndex(
          (item: { username: any }) => item.username === this.username
        );
        console.log(index, 'index');
        this.real[index] = body;

        // Clear the form and hide it
        this.clearForm();
        this.showForm = false;
      });
    } else {
      // Adding new data
      this.apis.postData(body).subscribe((res) => {
        // Add the new data to the real array and sort it alphabetically by username
        this.real.push(body);
        this.real.sort((a: any, b: any) => (a.username > b.username ? 1 : -1));
        // Clear the form and hide it
        this.clearForm();
        this.showForm = false;
      });
    }
  }
}
