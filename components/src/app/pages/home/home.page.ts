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
      icon: 'football-outline',
      name: 'alert',
      redirecTo: '/alert',
    },
    {
      icon: 'american-football-outline',
      name: 'action sheet',
      redirecTo: '/action-sheet',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
