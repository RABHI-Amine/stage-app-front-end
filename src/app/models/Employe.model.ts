import { Affectation } from "./Affectation.model";

export interface Employe{
    id?:number,
    nom:string,
    prenom:string,
    taches?:any[],
    affectation?:Affectation[],
    email?:string,
    numeroTelephone?:string
}