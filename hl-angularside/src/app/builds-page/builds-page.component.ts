import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builds-page',
  templateUrl: './builds-page.component.html',
  styleUrls: ['./builds-page.component.scss']
})
export class BuildsPageComponent implements OnInit {
  objectKeys = Object.keys;
  builds = [
    {class: 'Stamina Nightblade', name:"Markynaz", patch: "Murkmire"},
    {class: 'Stamina Templar', name:"Light Bringer", patch: "Murkmire"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
