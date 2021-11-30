import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from 'src/app/library/services/helpers/side-nav.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements AfterViewInit {

  @ViewChild("sidenav") sidenav: MatSidenav;
  
  sideNavItems: Array<{
    items: Array<any>
  }>;

  constructor(public sideNavService: SideNavService) {
    try {
      this.createSideNavItems()
    } catch (error) {
      console.error(error);
    }
  }

  ngAfterViewInit(){
    this.sideNavService.setSidenav(this.sidenav);
  }

  private createSideNavItems(): void {           
    this.sideNavItems = [
     {   
       items: [
          {
            name: "Contact",
            icon: "contactsIcon.png",
            link: "/contact"
          },
          {
            name: "About",
            icon: "aboutIcon.png",
            link: "/about"
          },
        ]
      }
    ]
  }
}
