import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchText: string | undefined;
  locations: any[] | undefined;
  weather: any;
  loading: boolean | undefined;
  error: string | undefined;

  constructor(private http: HttpClient) {
    this.searchText = '';
    this.locations = [];
    this.loading = false;
    this.error = '';
  }

  searchLocations() {
    this.error = '';
    this.loading = true;
    if (!this.searchText || this.searchText.length < 3) {
      this.locations = [];
      this.loading = false;
      return;
    }
    this.http.get(`https://api.weatherapi.com/v1/search.json?key=f56f24967aaf51182d1d4df628297c6d&q=${this.searchText}`).pipe(
      catchError((err) => {
        this.loading = false;
        this.error = err.message || 'Error fetching locations.';
        return of([]);
      })
    ).subscribe((locations: any) => {
      this.locations = locations;
      this.loading = false;
    });
  }

  selectLocation(location: any) {
    this.getWeather(location);
    this.locations = [];
    this.searchText = '';
  }

  setLocations(locations: any[]) {
    this.locations = locations;
    this.loading = false;
  }

  getWeather(location: any) {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=997d1a3a2373cb603ebccf93f616b1d9`).pipe(
      catchError((err) => {
        this.loading = false;
        this.error = err.message || 'Error fetching weather data.';
        return of([]);
      })
    ).subscribe((weather: any) => {
      this.weather = weather;
      this.loading = false;
    });
  }

}
