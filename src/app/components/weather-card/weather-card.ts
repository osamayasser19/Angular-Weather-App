import { Component, inject, input } from '@angular/core';
import { WeatherService } from '../../services/weather-service';

@Component({
  selector: 'app-weather-card',
  imports: [],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css',
})
export class WeatherCard {
 
  weather = input<any>({});
}
