import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builds-page',
  templateUrl: './builds-page.component.html',
  styleUrls: ['./builds-page.component.scss']
})
export class BuildsPageComponent implements OnInit {
  objectKeys = Object.keys;
  builds = {
    'Stamina Templar': 'insert description here',
    'Stamina Nightblade': 'insert description here',
  }
  constructor() { }

  ngOnInit() {
  }

}
