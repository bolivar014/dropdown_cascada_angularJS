import { Injectable } from '@angular/core';
// importamos interfaces
import { CountryI, DepartamentI, CityI } from '../models/model.interface';

@Injectable()

export class DataService {
  // Provider Country
  private countries: CountryI[] = [
    {
      id: 1,
      name: 'Brazil'
    }, {
      id: 2,
      name: 'España'
    }, {
      id: 3,
      name: 'Perú'
    }, {
      id: 4,
      name: 'Argentina'
    }, {
      id: 5,
      name: 'Republica Dominicana'
    }, {
      id: 6,
      name: 'Colombia'
    }
  ];

  private departaments: DepartamentI[] = [
    {
      id: 1,
      countryId: 6,
      name: 'Antioquia',
    }, {
      id: 2,
      countryId: 6,
      name: 'Amazonas',
    }, {
      id: 3,
      countryId: 6,
      name: 'Valle',
    }, {
      id: 4,
      countryId: 6,
      name: 'Cundinamarca',
    }, 
  ]

  // Provider Cities
  private cities: CityI[] = [
    {
      id: 1,
      countryId: 1,
      departamentId: 1,
      name: 'Sao Paulo'
    }, {
      id: 2,
      countryId: 1,
      departamentId: 1,
      name: 'Brasilia'
    }, {
      id: 3,
      countryId: 2,
      departamentId: 2,
      name: 'Barcelona'
    }, {
      id: 4,
      countryId: 2,
      departamentId: 2,
      name: 'Madrid'
    }, {
      id: 5,
      countryId: 3,
      departamentId: 3,
      name: 'Lima'
    }, {
      id: 6,
      countryId: 3,
      departamentId: 3,
      name: 'Trujillo'
    }, {
      id: 7,
      countryId: 4,
      departamentId: 4,
      name: 'Buenos Aires'
    }, {
      id: 8,
      countryId: 4,
      departamentId: 4,
      name: 'La Plata'
    }, {
      id: 9,
      countryId: 4,
      departamentId: 5,
      name: 'La Romana'
    }, {
      id: 10,
      countryId: 5,
      departamentId: 5,
      name: 'Santiago'
    }, {
      id: 11,
      countryId: 6,
      departamentId: 1,
      name: 'Medellín'
    }, {
      id: 12,
      countryId: 6,
      departamentId: 4,
      name: 'Bogota'
    }
  ]

  // Retornamos propiedades
  getCountries(): CountryI[] {
    return this.countries;
  }

  getDepartaments(): DepartamentI[] {
    return this.departaments;
  }

  getCities(): CityI[] {
    return this.cities;
  }
  
  // constructor() { }
}
