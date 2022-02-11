import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles/vehicles.service';
import { Vehicle } from 'src/app/models/vehicle';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicle = {} as Vehicle;
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.getVehicles()
  }

  getVehicles(){
    this.vehicleService.getVehicles().subscribe((vehicle: Vehicle[]) => {
      this.vehicles = vehicle
      console.log(vehicle)
    })
  }

  formatedDate(fulldate: string){
    const date = new Date(fulldate)

    let hour = String(date.getHours() + 3)
    let min = String(date.getMinutes())
    let sec = String(date.getSeconds())

    if (Number(hour) < 10) {
      hour = '0' + hour
    }
    if (Number(min) < 10) {
      min = '0' + min
    }
    if (Number(sec) < 10) {
      sec = '0' + sec
    }

    return `${hour}:${min}:${sec}`
  }

}
