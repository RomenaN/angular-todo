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
      { title: 'Mokinių sąašas', url: 'student-list' },
      { title: 'Registruoti', url: 'register/new' },
      { title: 'Apie', url: 'about' },
    ];
  }
}
