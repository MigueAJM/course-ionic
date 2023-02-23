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
      icon: 'beaker-outline',
      name: 'avatar',
      redirecTo: '/avatar',
    },
    {
      icon: 'contract-outline',
      name: 'action sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'buttons',
      redirecTo: '/button'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
