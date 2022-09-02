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
  public countries?: CountryI[];
  public departaments?: DepartamentI[];
  public cities?: CityI[];

  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    console.log(this.dataSvc.getCountries());
    console.log(this.dataSvc.getDepartaments());
    console.log(this.dataSvc.getCities());
    this.countries = this.dataSvc.getCountries();
    // this.departaments = this.dataSvc.getDepartaments();
  }

  onSelectDepartament(id: number): void {
    console.log('id->', id);
    this.departaments = this.dataSvc.getDepartaments().filter(item => item.countryId == id);
  }
}
