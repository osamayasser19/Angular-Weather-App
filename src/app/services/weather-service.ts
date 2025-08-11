import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  private readonly apiKey = environment.weatherApiKey;
  cityData = signal<any>(null);
  getWeather(city: string) {
    this.http
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}&aqi=no`
      )
      .subscribe((data) => {
        this.cityData.set(data);
      });
  }
}
