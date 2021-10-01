export interface Projet{
    id?:number,
    nom: string,
    description?: string,
    employes: any[],
    taches?: any[],
    affectations?: any[],
    dateDebut: Date,
    dateLivraison: Date,
    nomClient: string
}