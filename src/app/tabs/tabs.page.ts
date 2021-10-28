import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router : Router) {}
  openView(tab: number){
    switch(tab){
      case 1 : this.router.navigate(['tab1']); break;
      case 2 : this.router.navigate(['tab2']); break;
    }
  }
}
