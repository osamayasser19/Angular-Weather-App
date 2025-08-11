import { Component, output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  btnClick = output<string>();

  onSearch(city: string) {
    if (city.trim()) {
      this.btnClick.emit(city);
    }
  }
}
