import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  display: boolean = false;
  items: MenuItem[] = [];
  
  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(){
    this.items = [{
      label: 'Options',
      items: [{
          label: 'Hasenstall',
          icon: 'pi pi-angle-right',
          command: () => {
              this.router.navigate(['sidebar/rabits']);
              this.display = false;
          }
      },
      {
          label: 'Bewässerung',
          icon: 'pi pi-angle-right',
          command: () => {
            this.router.navigate(['sidebar/watering']);
            this.display = false;
          }
      },
      {
          label: 'Das Gehühn',
          icon: 'pi pi-angle-right',
          command: () => {
            this.router.navigate(['sidebar/chicken']);
            this.display = false;
          }
      }
      ]},
    ];
  }

  update() {
    
  }

  delete() {
    
  }

}
