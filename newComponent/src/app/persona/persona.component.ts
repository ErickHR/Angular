import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  /*templateUrl: './persona.component.html',*/
  template: `<br/><br/><p>probando backtick en componentes generados en linea</p>
  <h1>otra linea<h1>`,
  styles: [
    `h1{
      color: blue;
    }`
  ]
})
export class PersonaComponent{

}
