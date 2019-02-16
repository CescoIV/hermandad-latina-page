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

  navBar=["Builds", "Mundo/Lore", "Discord"];

  introTitle= "Oye, despierta, estabaz soñando. Escuche a los guardias, dicen que hemos llegado. La Belleza del Alba, Tamriel. Esa tierra llena de aventura y misterio en la que los dioses osan por motivos no intelegibles. Esa tierra en la que te has perdido o comienzas a perderte. Bienvenido a Hermandad Latina, tu centro hablahispano para todo con el universo de The Elder Scrolls!"
  constructor() { }

  ngOnInit() {
  }

}
