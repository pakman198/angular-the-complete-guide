import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visibleFeature: string = 'recipes';

  setVisibleFeature(feature: string) {
    this.visibleFeature = feature;
  }
}
