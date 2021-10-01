import { Employe } from "./Employe.model";
import { Projet } from "./Projet.model";

export interface Tache{
    id?:number,
    name:string,
    etat:string,
    description?:string,
    projet:Projet,
    employe:Employe
}