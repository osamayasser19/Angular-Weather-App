import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherCard } from './components/weather-card/weather-card';
import { Search } from './components/search/search';
import { WeatherService } from './services/weather-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherCard, Search],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  weatherService = inject(WeatherService);

  hello() {
    console.log('hello');
  }
}
