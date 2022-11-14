import { Component, OnInit } from '@angular/core';

export interface NavItems {
  title: string;
  url: string;
}

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent implements OnInit {
  navItems: NavItems[] = [];

  constructor() {}

  ngOnInit(): void {
    this.navItems = [
      { title: 'Užduočių sąrašas', url: 'task-list' },
      { title: 'Nauja užduotis', url: 'new-task/new' },
      { title: 'Valiutų kursai', url: 'exchange' },
      { title: 'Apie', url: 'about' },
    ];
  }
}
