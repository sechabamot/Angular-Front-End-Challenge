import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  private sidenav: MatSidenav;
  public  open = true;
  public  mode = 'side';
  constructor() { }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public openNav() {
    return this.sidenav.open();
  }


  public closeNav() {
    return this.sidenav.close();
  }

  public toggle(): void {

    const element = (document.querySelector('.mat-drawer-container') as HTMLElement);
    !this.sidenav.opened.valueOf() ? element.classList.add('mobile-nav-open') : element.classList.remove('mobile-nav-open');
    this.sidenav.toggle();
  }

}
