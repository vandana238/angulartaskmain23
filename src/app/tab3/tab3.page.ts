import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  temperature: any;
  city: any;
  latitude: any;

  constructor(private httpClient: HttpClient) {
  }

    LoadData() {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.getWeather(latitude, longitude);
      });
    }

    getWeather = async (latitude: any, longitude: any) => {
      const URL = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f56f24967aaf51182d1d4df628297c6d`;
      this.httpClient.get(URL).subscribe((results: any) => {
        console.log(results);
        this.temperature = results.main.temp - 273.15;
        this.city = results.name;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      });
    }
  }



























