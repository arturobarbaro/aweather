import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sidebarMode = 'side';
  cityName = 'app';

  public search(cityName: string): void {
    this.cityName = cityName;
  }
}
