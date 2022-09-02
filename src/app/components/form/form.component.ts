import { Component, OnInit } from '@angular/core';
// Importamos interfaces
import { CountryI, CityI } from 'src/app/models/model.interface'; 
import { DataService } from 'src/app/service/data.service';
import { DepartamentI } from '../../models/model.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DataService] // Inyección de propiedades
})
export class FormComponent implements OnInit {
  // 
  public selectedCountry: CountryI = {id: 0, name: '' };
  public selectedDepartament: DepartamentI = {id: 0, countryId: 0, name: '' };
  public selectedCities: CityI = {id: 0, countryId: 0, departamentId: 0, name: '' };
  public countries?: CountryI[];
  public departaments?: DepartamentI[];
  public cities?: CityI[];
  public idCountry = 0;

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    // console.log(this.dataSvc.getCountries());
    // console.log(this.dataSvc.getDepartaments());
    // console.log(this.dataSvc.getCities());
    this.countries = this.dataSvc.getCountries();
    // this.departaments = this.dataSvc.getDepartaments();
  }

  onSelectDepartament(id: number): void {
    // console.log('id->', id);
    this.idCountry = id;
    this.departaments = this.dataSvc.getDepartaments().filter(item => item.countryId == id);
    this.cities = this.dataSvc.getCities().filter(item => item.departamentId == id ).filter(item => item.countryId == this.idCountry );
  
  }

  onSelectCity(id: number): void {
    // console.log('id ciudad->', id);
    // console.log('idCountry: ', this.idCountry);
    this.cities = this.dataSvc.getCities().filter(item => item.departamentId == id ).filter(item => item.countryId == this.idCountry );
  }
}
