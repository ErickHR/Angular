import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  titulo = 'servicios';

  boton:boolean = false
  personas:Persona[] =[]

  constructor(private logginService:LoggingService, private personaService:PersonasService){
    setTimeout(() => {
      this.boton = true
    }, 3000);
  }

  ngOnInit():void{
    this.personas = this.personaService.personas
  }

}
