import { Projet } from "./Projet.model";

export interface Affectation{
    id?:number,
    role?: any,
    employe?:any,
    projet:Projet
}