import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip } from 'src/app/core/models/trip';
import { CheckpointsService } from 'src/app/core/services/checkpoints.service';
import { TripService } from 'src/app/core/services/trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})

export class TripComponent implements OnInit {
  price: number;
  trip!: Trip;
  zoom = 6
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 4,
  }
  markers : {
    position : any,
    title : string,
    icon : any,
    options : any
  }[] = [];

  polylineOptions : {
    path: [{
      lat : number,
      lng : number,
    }] | any,
    strokeColor: '#32a1d0',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  };
  completion : number = 0;
  completionPercent : string = "0%";

  constructor(
    private tripService : TripService,
    private checkpointService : CheckpointsService,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    
    this.getData();
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    }, () => {
      this.center = {
        lat: 49.9453688196281,
        lng: -4.660580155672034,
      }
    });
    
  }

  getData() {
    let tripId = this.route.snapshot.paramMap.get('id')
    this.tripService
    .getTrip(tripId)
    .subscribe(response => {
      const tripToShow = {
        id: response.data.id,
        ...response.data.attributes,
      }
      const boatData = response.data.attributes.boats?.data;

      if (boatData && boatData.length > 0) {
        tripToShow.boat = {
          id: boatData[0].id,
          ...boatData[0].attributes
        }
      }
      this.trip = tripToShow as Trip;
    });

    this.checkpointService
    .getCheckpoints()
    .subscribe(response => {
      let data = response.data
      console.log(response);
      
      let tripCheckpoints = data.filter((element : any) => {
        return element.attributes.trip.data.id == tripId
      })

      this.trip.checkpoints = tripCheckpoints;
      this.addMarkers();
    })
  }

  addMarkers() {
    let coords : {
      lat : number,
      lng : number,
    }[] = []
    this.trip.checkpoints?.forEach(checkpoint => {
      let image : string;
      switch (checkpoint.attributes.order) {
        case 1:
          image = 'assets/icons/anchor.png';
          break;
        case 4:
          image = 'assets/icons/flag.png';
          break;
        default : 
          image = 'assets/icons/step.png';
          break;
      }

      this.markers.push({
        position: {
          lat: checkpoint.attributes.location.data.attributes.lat,
          lng: checkpoint.attributes.location.data.attributes.lon,
        },
        icon : image,
        title: 'Etape n°' + (this.markers.length + 1),
        options: { },
      });

      coords.push({
        lat: checkpoint.attributes.location.data.attributes.lat,
        lng: checkpoint.attributes.location.data.attributes.lon,
      })
      
      if (checkpoint.attributes.state.data.attributes.name == "passé") {
        this.completion += 100 / (this.trip.checkpoints ? this.trip.checkpoints.length : 4)
        this.completionPercent = `${this.completion}%`;
      }

    })

    coords.sort((a,b) => {
      return a.lat - b.lat
    })

    this.polylineOptions = {
      path: coords,
      strokeColor: '#32a1d0',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    }
    
  }
  setPrice(event: Event) {
    const newPlace = parseInt((event.target as HTMLInputElement).value, 10);

    this.price = newPlace / 3;
  }
}

