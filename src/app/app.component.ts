import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { map } from 'rxjs';

declare var google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'gmap--ang';
  map: any;
  // title: any;
  @ViewChild('map') mapElement: any;
  lat = 28.633569024567407;
  lng = 77.4455361419402;

  markers = [
    { lat: 28.633569024567407, lng: 77.4455361419402, title: "Govind Children Charitable Trust" },
    { lat: 28.62658, lng: 77.55228, title: "Amogha Educational Society"},
    { lat: 28.75606, lng: 77.859, title: "ABC Educational Society"},
    { lat: 28.66334, lng: 78.53352 },
    { lat: 29.99407, lng: 77.31618 },
    { lat: 28.92393, lng: 78.58339 }
  ];


  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(this.lat, this.lng, this.title),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);

    this.markers.forEach(location => {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.lat, location.lng, location.title),
        map: this.map,
        title: "Govind Children Charitable Trust"
      });
    
  
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Govind Children Charitable Trust</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Govind Children Charitable Trust</b>, is a NGO " +
    "which works for the welfare of the Children. " + 
    "<br> Address- Plot No. 17-18, Anand Industrial Estate, Mohan Nagar.</p>" +
    '<p>Attribution: Govind Children Charitable Trust <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://www.giveindia.org/children" + "</a> </p>" +
    "</div>" +
    "</div>";
    
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  // const marker = new google.maps.Marker({
  //   position: new google.maps.LatLng(this.lat, this.lng),
  //   map,
  //   title: "Uluru (Ayers Rock)",
  // });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
});
}

}