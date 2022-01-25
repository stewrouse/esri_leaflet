import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import 'esri-leaflet';
import 'esri-leaflet-vector';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map',{
      center:[39.8282,-98.5795],
      zoom:3
    });

    //vt.vector.vectorBasemapLayer("ArcGIS:Streets",{apikey:"AAPK993614093b73473881a493b891ba8e85uHePB2uShhEdc-Dwq919f7rEtfqvSIYXl4242TpHDzhEoo4UxRIPGTomz4Ldbjqd"}).addTo(this.map);
    const options =
    L.esri.Vector.VectorBasemapLayer('ArcGIS:Streets', {apikey:"AAPK993614093b73473881a493b891ba8e85uHePB2uShhEdc-Dwq919f7rEtfqvSIYXl4242TpHDzhEoo4UxRIPGTomz4Ldbjqd"}).addTo(this.map)
  }



  constructor() { }

  ngAfterViewInit(): void{
    this.initMap();
  }

}
