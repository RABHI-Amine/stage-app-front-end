import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 
   constructor(private observer: BreakpointObserver,private authentificationService:AuthentificationService) {}
 
   logout(){
    this.authentificationService.logout();
   }
   ngOnInit(){}
   ngAfterViewInit() {
     this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
       if (res.matches) {
         this.sidenav.mode = 'over';
         this.sidenav.close();
       } else {
         this.sidenav.mode = 'side';
         this.sidenav.open();
       }
     });
   }

   
}
