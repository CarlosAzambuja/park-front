import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from 'src/app/services/vehicles/vehicles.service';
import { Vehicle } from 'src/app/models/vehicle';

@Component({
  selector: 'app-form-vehicles',
  templateUrl: './form-vehicles.component.html',
  styleUrls: ['./form-vehicles.component.css'],
})
export class FormVehiclesComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private vehiculeService: VehiclesService
  ) {}

  vehicleForm = new FormGroup({
    plate: new FormControl(''),
    entry_date: new FormControl(new Date().toISOString()),
  });

  onSubmit(): void {
    let formData: any = new FormData();
    formData.append('plate', this.vehicleForm.get('plate')?.value);
    formData.append('entry_date', this.vehicleForm.get('entry_date')?.value);

    this.vehiculeService.saveVehicle(formData).subscribe(
      (response) => console.log(response),
      (error) => this.handleError(error.status)
    );

    // this.ngOnInit();
    // this.vehicleForm.reset()
    this.vehicleForm.setValue({'plate': '', 'entry_date': new Date().toISOString()})
  }

  handleError(status: number) {
    if (status == 409) {
      alert('Veículo já está no pátio!');
    }
  }

  ngOnInit(): void {
    
  }
}
