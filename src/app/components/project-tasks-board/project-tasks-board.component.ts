import {
  Component,
  OnInit
} from '@angular/core';
import {
  Tache
} from 'src/app/models/Tache.model';
import {
  TacheService
} from 'src/app/services/tache.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import {
  AddTacheAFaireComponent
} from '../add-tache-afaire/add-tache-afaire.component';
import {
  MatDialog
} from '@angular/material/dialog';
import { AddTacheTermineComponent } from '../add-tache-termine/add-tache-termine.component';
import { AddTacheEnCoursComponent } from '../add-tache-en-cours/add-tache-en-cours.component';

@Component({
  selector: 'app-project-tasks-board',
  templateUrl: './project-tasks-board.component.html',
  styleUrls: ['./project-tasks-board.component.css']
})
export class ProjectTasksBoardComponent implements OnInit {

  taches: Tache[];
  tachesEnCours: Tache[];
  tachesAFaire: Tache[];
  tachesTermine: Tache[];

  constructor(
    private tacheService: TacheService,
    private dialog: MatDialog,
    private dialog2: MatDialog,
    private dialog3: MatDialog,
  ) {

  }

  ngOnInit(): void {
    this.tacheService.getTacheByProjectAndEmployeId(1, 1).subscribe(taches => {
      this.taches = taches
      this.tachesEnCours = this.taches.filter(t => t.etat == "En cours");
      this.tachesAFaire = this.taches.filter(t => t.etat == "A faire");
      this.tachesTermine = this.taches.filter(t => t.etat == "Termine")
    })
  }

  drop(event: CdkDragDrop < string[] > ) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.tachesAFaire.forEach(tache => {
      if (tache.etat != "A faire") {
        tache.etat = "A faire"
        this.tacheService.updateTache(tache.id, tache)
          .subscribe(tache => console.log(tache))
      }
    })
    this.tachesEnCours.forEach(tache => {
      if (tache.etat != "En cours") {
        tache.etat = "En cours"
        this.tacheService.updateTache(tache.id, tache)
          .subscribe(tache => console.log(tache))
      }
    })
    this.tachesTermine.forEach(tache => {
      if (tache.etat != "Termine") {
        tache.etat = "Termine"
        this.tacheService.updateTache(tache.id, tache)
          .subscribe(
            tache => console.log(tache),
            err => console.log(err)
          )
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTacheAFaireComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }

  openDialog2() {
    const dialogRef = this.dialog.open(AddTacheEnCoursComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }

  openDialog3() {
    const dialogRef = this.dialog.open(AddTacheTermineComponent);
    dialogRef.afterClosed().subscribe(result => {});
  }



}
