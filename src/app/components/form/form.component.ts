import { Component, OnInit } from '@angular/core';
// Importamos interfaces
import { CountryI, CityI } from 'src/app/models/model.interface'; 
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DataService] // Inyección de propiedades
})
export class FormComponent implements OnInit {

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    console.log(this.dataSvc.getCountries());
    console.log(this.dataSvc.getCities());
  }

}
