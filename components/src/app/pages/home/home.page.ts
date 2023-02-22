import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/interfaces/component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components: NavItem[] = [
    {
      icon: 'alert-circle-outline',
      name: 'alert',
      redirecTo: '/alert',
    },
    {
      icon: 'contract-outline',
      name: 'action sheet',
      redirecTo: '/action-sheet',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
