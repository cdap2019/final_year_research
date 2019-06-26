import { Component, OnInit , ViewChild } from '@angular/core';
// import { Component, ViewChild } from ‘@angular/core’;
// import {} from 'googlemaps';
// declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('googleMap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(28.4595, 77.0266),
      zoom: 14,
      // mapTypeId: google.maps.MapTypeId.ROADMAP
      mapTypeId: google.maps.MapTypeId.HYBRID
      // mapTypeId: google.maps.MapTypeId.SATELLITE
      // mapTypeId: google.maps.MapTypeId.TERRAIN
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      var marker = new google.maps.Marker({ position: mapProp.center });
      marker.setMap(this.map);
      var infowindow = new google.maps.InfoWindow({
      content: 'Hey, We are here'
      });
     infowindow.open(this.map, marker);
  }

}
