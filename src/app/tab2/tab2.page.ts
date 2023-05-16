import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
searchTerm: any;
recentContacts: any;

  constructor() {}

  public contacts: any=[
    {
      "id": 1,
      "name": "Elma Herring",
      "email": "elmaherring@unq.com",
      "phone": "+1 (913) 497-2020",
      "imageSrc":'assets/pro1.jpg'
    },
    {
      "id": 2,
      "name": "Knapp Berry",
      "email": "knappberry@unq.com",
      "phone": "+1 (951) 472-2967",
      "imageSrc":'assets/pro2.jpg'
    },
    {
      "id": 3,
      "name": "Bell Burgess",
      "email": "bellburgess@unq.com",
      "phone": "+1 (887) 478-2693",
      "imageSrc":'assets/pro3.jpg'
    },
    {
      "id": 4,
      "name": "Hobbs Ferrell",
      "email": "hobbsferrell@unq.com",
      "phone": "+1 (862) 581-3022",
      "imageSrc":'assets/pro9.jpg'
    },
    {
      "id": 5,
      "name": "Marylou Medina",
      "email": "maryloumedina@unq.com",
      "phone": "+1 (996) 520-2967",
      "imageSrc":'assets/pro5.jpg'
    },
    {
      "id": 6,
      "name": "Larson Guerra",
      "email": "larsonguerra@unq.com",
      "phone": "+1 (972) 566-2684",
      "imageSrc":'assets/pro1.jpg'
    },
    {
      "id": 7,
      "name": "Shelby Ballard",
      "email": "shelbyballard@unq.com",
      "phone": "+1 (824) 467-3579",
      "imageSrc":'assets/pro7.jpg'
    },
    {
      "id": 8,
      "name": "Lea Faulkner",
      "email": "leafaulkner@unq.com",
      "phone": "+1 (899) 528-3402",
      "imageSrc":'assets/pro8.jpg'
    },
    {
      "id": 9,
      "name": "Cecelia Wolf",
      "email": "ceceliawolf@unq.com",
      "phone": "+1 (862) 507-3140",
      "imageSrc":'assets/pro9.jpg'
    },
    {
      "id": 10,
      "name": "Melva Nixon",
      "email": "melvanixon@unq.com",
      "phone": "+1 (901) 444-3081",
      "imageSrc":'assets/pro10.jpg'
    },
    {
      "id": 11,
      "name": "Bernard Chambers",
      "email": "bernardchambers@unq.com",
      "phone": "+1 (831) 539-3366",
      "imageSrc":'assets/pro11.jpg'
    },
    {
      "id": 12,
      "name": "Wendi Bender",
      "email": "wendibender@unq.com",
      "phone": "+1 (868) 414-2720",
      "imageSrc":'assets/pro12.jpg'
    },
    {
      "id": 13,
      "name": "Wall Stewart",
      "email": "wallstewart@unq.com",
      "phone": "+1 (814) 558-3191",
      "imageSrc":'assets/pro13.jpg'
    },
    {
      "id": 14,
      "name": "Howell Gilbert",
      "email": "howellgilbert@unq.com",
      "phone": "+1 (926) 512-3631",
      "imageSrc":'assets/pro14.jpg'
    },
    {
      "id": 15,
      "name": "Nguyen Maxwell",
      "email": "nguyenmaxwell@unq.com",
      "phone": "+1 (838) 469-2152",
      "imageSrc":'assets/pro15.jpg'
    },
    {
      "id": 16,
      "name": "Norris Hendricks",
      "email": "norrishendricks@unq.com",
      "phone": "+1 (818) 563-2900",
      "imageSrc":'assets/pro15.jpg'
    },
    {
      "id": 17,
      "name": "Salinas Mcleod",
      "email": "salinasmcleod@unq.com",
      "phone": "+1 (888) 413-3775",
      "imageSrc":'assets/pro17.jpg'
    },
    {
      "id": 18,
      "name": "Michelle Barrett",
      "email": "michellebarrett@unq.com",
      "phone": "+1 (988) 446-2594",
      "imageSrc":'assets/pro13.jpg'
    },
    {
      "id": 19,
      "name": "Burke Barlow",
      "email": "burkebarlow@unq.com",
      "phone": "+1 (965) 492-2552",
      "imageSrc":'assets/pro12.jpg'
    },
    {
      "id": 20,
      "name": "Rosie Cummings",
      "email": "rosiecummings@unq.com",
      "phone": "+1 (845) 456-2237",
      "imageSrc":'assets/pro11.jpg'
    },
    {
      "id": 21,
      "name": "Sanford Frye",
      "email": "sanfordfrye@unq.com",
      "phone": "+1 (936) 581-3494",
      "imageSrc":'assets/pro10.jpg'
    },
    {
      "id": 22,
      "name": "Janna Peck",
      "email": "jannapeck@unq.com",
      "phone": "+1 (824) 512-2437",
      "imageSrc":'assets/pro9.jpg'
    },
    {
      "id": 23,
      "name": "Lorraine Sykes",
      "email": "lorrainesykes@unq.com",
      "phone": "+1 (959) 422-3635",
      "imageSrc":'assets/pro8.jpg'
    },
    {
      "id": 24,
      "name": "Vicki Fulton",
      "email": "vickifulton@unq.com",
      "phone": "+1 (916) 455-2402",
      "imageSrc":'assets/pro7.jpg'
    },
    {
      "id": 25,
      "name": "Massey Moody",
      "email": "masseymoody@unq.com",
      "phone": "+1 (840) 453-3811",
      "imageSrc":'assets/pro6.jpg'
    },
    {
      "id": 26,
      "name": "Grant Berg",
      "email": "grantberg@unq.com",
      "phone": "+1 (837) 554-3706",
      "imageSrc":'assets/pro5.jpg'
    },
    {
      "id": 27,
      "name": "Hawkins Winters",
      "email": "hawkinswinters@unq.com",
      "phone": "+1 (945) 469-2432",
      "imageSrc":'assets/pro4.jpg'
    },
    {
      "id": 28,
      "name": "Frazier Davidson",
      "email": "frazierdavidson@unq.com",
      "phone": "+1 (854) 558-2637",
      "imageSrc":'assets/pro3.jpg'

    },
    {
      "id": 29,
      "name": "Francine Cervantes",
      "email": "francinecervantes@unq.com",
      "phone": "+1 (923) 520-2916",
      "imageSrc":'assets/pro2.jpg'
    },
    {
      "id": 30,
      "name": "Francis Perez",
      "email": "francisperez@unq.com",
      "phone": "+1 (885) 461-3054",
      "imageSrc":'assets/pro1.jpg'
    }
  ];

  ngOnInit() {
    this.contacts.sort((a: { name: string; },b: { name: any; }) => a.name.localeCompare(b.name));
  }


  get filteredContacts() {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      // If no search term is entered or it contains only whitespace, return all contacts
      return this.contacts;
    }

    const searchTermLowerCase = this.searchTerm.toLowerCase();
    // Filter contacts based on the search term
    return this.contacts.filter((contact: any) =>
      contact.name.toLowerCase().includes(searchTermLowerCase) ||
      contact.email.toLowerCase().includes(searchTermLowerCase) ||
      contact.phone.toLowerCase().includes(searchTermLowerCase)
    );
  }

}
