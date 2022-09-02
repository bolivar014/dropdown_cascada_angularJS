// Interfaz Pais
export interface CountryI {
    id: number;
    name: string;
}

export interface DepartamentI {
    id: number;
    countryId: number;
    name: string;
}

// Interfaz Ciudad
export interface CityI {
    id: number;
    departamentId: number;
    name: string;
}