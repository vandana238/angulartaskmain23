import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'



const API_URL =environment.API_URL;
const API_KEY=environment.API_KEY;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  temperature: any;
  city: any;
  latitude: any;


constructor(public httpClient:HttpClient) {
  }

LoadData() {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    this.getWeather(latitude, longitude);
  });
}

getWeather = async (latitude:any, longitude:any) => {
  console.log(latitude,longitude)
  const URL = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f56f24967aaf51182d1d4df628297c6d`;

  this.httpClient.get(URL).subscribe((results: any) => {
    console.log(results);
    this.temperature = results.main.temp-273.15;
    this.city = results.name;

  });
}

}

