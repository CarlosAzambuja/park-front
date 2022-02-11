import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from 'src/app/services/vehicles/vehicles.service';
import { Vehicle } from 'src/app/models/vehicle';


@Component({
  selector: 'app-form-vehicles',
  templateUrl: './form-vehicles.component.html',
  styleUrls: ['./form-vehicles.component.css']
})
export class FormVehiclesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private vehiculeService: VehiclesService) { }

  vehicleForm = new FormGroup({
    plate: new FormControl(''),
    entry_date: new FormControl((new Date).toISOString())
  })

  onSubmit(): void {
    const plate = this.vehicleForm.get('plate')?.value
    const date = this.vehicleForm.get('entry_date')?.value

    // this.vehiculeService.saveVehicle(plate, date).subscribe()
  }

  ngOnInit(): void {
  }

}
