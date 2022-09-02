// Interfaz Pais
export interface CountryI {
    id: number;
    name: string;
}

// Interfaz Ciudad
export interface CityI {
    id: number;
    countryId: number;
    name: string;
}