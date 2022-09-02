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
  // 
  public selectedCountry: CountryI = {id: 0, name: '' };
  public countries?: CountryI[];
  public cities?: CityI[];

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    // console.log(this.dataSvc.getCountries());
    // console.log(this.dataSvc.getCities());
    this.countries = this.dataSvc.getCountries();
  }

  onSelectCity(id: number): void {
    // console.log('id->', id);
    this.cities = this.dataSvc.getCities().filter(item => item.countryId == id);
  }
}
