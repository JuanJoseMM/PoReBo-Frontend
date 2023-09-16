import { Direccion } from "./direccion.model";
import { Persona } from "./persona.model";

export interface identificationDocument{
    id:string;
    documentType:string,
    documentNumber:string,
    dateOfBirth:Date,
    location:string,
    person:Persona,
    address:Direccion
}