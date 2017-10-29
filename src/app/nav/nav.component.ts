import { Component } from '@angular/core';
import { AuthGuardService } from '../Services/guard.sevice'

@Component({
  selector: 'fancy-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  // providers:[AuthGuardService]
})
export class NavComponent {
 constructor(private authGuardService: AuthGuardService) { }
  /*isShowNav():boolean {
    return this.authGuardService.canActivate();
  }*/
  
}
