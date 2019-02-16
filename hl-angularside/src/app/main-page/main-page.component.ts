import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  page = {
    title: 'home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'https://vignette.wikia.nocookie.net/elderscrolls/images/b/b0/Tamriel_Anthology_Map.png/revision/latest?cb=20151019090524',
  }
  constructor() { }

  ngOnInit() {
  }

}
