import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // navBar=["Builds", "Mundo/Lore", "Discord"];
  navBar = [
    {name: "Builds", route: "/builds"},
    {name: "Mundo/Lore", route: "/lore"},
    {name: "Discord", route: "/discord"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
