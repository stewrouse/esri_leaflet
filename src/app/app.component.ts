import { Component, ElementRef, ViewChild } from '@angular/core';

import * as L from 'leaflet';
import { vectorBasemapLayer } from 'esri-leaflet-vector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esri_leaflet';
    @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;

    ngOnInit() {
      const container = this.mapViewEl.nativeElement;
      const map = L.map(container).setView([48.865195, 2.321033], 16);

      vectorBasemapLayer('ArcGIS:Streets', {
        apikey: 'API_KEY'
      }).addTo(map);
    }
}
